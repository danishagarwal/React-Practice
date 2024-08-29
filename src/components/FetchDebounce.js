import React, { useState, useEffect } from "react";

const FetchDebounce = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setSuggestions(data); // Show all users initially
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        const filteredUsers = users.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filteredUsers);
      } else {
        setSuggestions(users); // Show all users if query is empty
      }
    }, 300); // Adjust the debounce delay as needed

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [query, users]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchDebounce;
