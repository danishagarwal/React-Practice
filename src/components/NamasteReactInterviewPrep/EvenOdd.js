import React, { useEffect, useState } from "react";

const EvenOdd = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const btnClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 2000);
  };
  return (
    <div>
      <h1>Even Odd Component</h1>
      <input
        type="number"
        placeholder="Enter a number"
        className="bg-slate-200 py-0.5"
        onChange={(e) => {
          setValue(e.target.value);
          setResult(false);
        }}
        value={value}
      />
      <button
        onClick={btnClick}
        className="bg-blue-500 text-white px-4 py-0.5 ml-2 rounded"
      >
        Check
      </button>
      <div>
        {loading && <p className="mt-4">Loading...</p>}
        {result && (
          <p className="mt-4">
            The number {value} is {value % 2 === 0 ? "Even" : "Odd"}.
          </p>
        )}
      </div>
    </div>
  );
};

export default EvenOdd;
