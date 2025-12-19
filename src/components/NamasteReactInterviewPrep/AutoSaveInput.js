import React, { useEffect, useState } from "react";

const AutoSaveInput = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("inputValue");
    console.log(saved);
    if (saved) {
      setValue(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("inputValue", value);
  }, [value]);

  const click = () => {
    setValue("");
    localStorage.removeItem("inputValue");
  };

  return (
    <div>
      Auto Save Input
      <input
        className="bg-slate-100 px-2 mx-1"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-slate-400 px-2" onClick={click}>
        Clear
      </button>
    </div>
  );
};

export default AutoSaveInput;
