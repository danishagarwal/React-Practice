import logo from "./logo.svg";
import "./App.css";

function App() {
  const users = [
    { name: "Danish", age: "10" },
    { name: "BOBBY", age: "20" },
    { name: "PALAK", age: "30" },
  ];

  return (
    <>
      {/* Q1 - Display JSX */}
      <div className="App">JSX is Cool </div>;
      {/* Display users data and display on screen */}
      <div>
        <h2>UserNames</h2>
        <ul>
          {users.map((user) => (
            <li>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
