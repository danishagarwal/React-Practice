import React, { useState } from "react";

const TodoList = () => {
  const [data, setData] = useState([]);

  const [todo, setTodo] = useState("");

  const addtodo = (e) => {
    e.preventDefault();
    if (todo.length >= 1) {
      setData([...data, todo]);
      setTodo("");
    }
  };

  const del = (index) => {
    const newTasks = data.filter((_, i) => i !== index);
    setData(newTasks);
  };
  return (
    <>
      <div>
        <form onSubmit={addtodo}>
          <input
            className="border border-black mt-2"
            placeholder="Add your Todo"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button className="ml-2 border border-black w-10"> Add</button>
        </form>
      </div>

      {data.map((data, index) => (
        <div key={index} className="flex">
          <div>
            {index + 1} {data}
          </div>
          <button onClick={() => del(index)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
