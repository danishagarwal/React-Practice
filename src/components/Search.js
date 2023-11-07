import React, { useState } from "react";
const list = ["Apple", "Banana", "PineApple", "Jam", "Cherry", "Mango"];
const Search = () => {
  const [filter, setFilter] = useState(list);

  const [valuee, setValuee] = useState("");

  const handleSubmit = () => {
    if (valuee) {
      list.push(valuee);
      setFilter([...filter]);
      setValuee("");
    }
  };
  const handleSearch = (e) => {
    if (e.target.value == "") {
      setFilter(list);
      return;
    }
    const filterValue = list.filter((item) =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilter(filterValue);
  };
  return (
    <div className="p-2">
      Search
      <input
        className="bg-slate-100 px-2 mx-1"
        type="text"
        onChange={handleSearch}
      ></input>
      <br></br>
      Add Item
      <input
        className="mt-2 bg-slate-100 px-2 mx-1"
        type="text"
        value={valuee}
        onChange={(e) => {
          setValuee(e.target.value);
          console.log(valuee);
        }}
      ></input>
      <button className="bg-green-200" onClick={handleSubmit}>
        Add Item
      </button>
      {filter.map((i, index) => (
        <div key={index}>{i} </div>
      ))}
    </div>
  );
};

export default Search;
