import React, { useState } from "react";

const StateHook = () => {
  const [counter, setCounter] = useState(0);

  const [word, setWord] = useState("Pedro");

  const change = (e) => {
    setWord(e.target.value);
  };

  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <>
      <div>
        {" "}
        {counter}
        <button onClick={increment}>Increment</button>
      </div>

      <div>
        <input placeholder="hello" onChange={change}></input>
        {word}
      </div>
    </>
  );
};

export default StateHook;
