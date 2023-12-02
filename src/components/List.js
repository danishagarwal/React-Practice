import React, { useState } from "react";

const List = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleClick = () => {
    setItems([...items, newItem]);
    setNewItem(" ");
  };
  return (
    <>
      {" "}
      <div className="pt-2">
        <label>Input</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="border border-black ml-1"
          type="text"
        ></input>

        <button
          onClick={handleClick}
          className="border border-black bg-slate-100 ml-5 px-2"
        >
          Add Item
        </button>

        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default List;
