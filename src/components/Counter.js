import { useState } from "react";
import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} className="p-2 bg-slate-200">
        +
      </button>
      <button onClick={() => setCount(count - 1)} className="p-2 bg-slate-200">
        -
      </button>
    </div>
  );
};

export default Counter;
