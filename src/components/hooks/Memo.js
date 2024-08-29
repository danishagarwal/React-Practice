import React, { useState, useMemo } from "react";
import { nthPrime } from "./helper";

const Memo = () => {
  const [text, setText] = useState(1);
  //With UseMemo
  const prime = useMemo(() => nthPrime(text), [text]);

  //Without Memo
  //   const prime = () => {
  //     return nthPrime(text);
  //   };

  console.log(prime);
  const [isDark, setisDark] = useState(false);

  return (
    <>
      <div
        className={
          "p-2 m-2 border border-black h-96 w-96 " + (isDark && "bg-gray-400")
        }
      >
        <div>
          <input
            type="number"
            className="mt-2 border border-black"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <h1 className="">{text} Prime Number: </h1>
          <span>{prime}</span>
        </div>
        <button
          className="border border-black bg-green-200 p-1 mt-3"
          onClick={() => setisDark(!isDark)}
        >
          Toggle
        </button>
      </div>
    </>
  );
};

export default Memo;
