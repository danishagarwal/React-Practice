import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [query, setQuery] = useState("");

  const callApi = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
    setFilter(data);
  };

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    const timeid = setTimeout(() => {
      const filteredUsers = data.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilter(filteredUsers);
    }, 300);

    return () => clearTimeout(timeid);
  }, [data, query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <input placeholder="searc" value={query} onChange={handleSearch}></input>

      {filter.map((data, index) => (
        <ul key={index}>{data.name}</ul>
      ))}
    </>
  );
};

export default Fetch;
