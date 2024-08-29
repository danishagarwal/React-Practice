import React, { useState, useEffect } from "react";

export default function CounterTimer() {
  const [timer, setTimer] = useState(0); //timer
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevtimer) => prevtimer + 1);
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const handleMouseEnter = () => {
    setIsRunning(true);
  };

  const handleMouseLeave = () => {
    console.log(isRunning);
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: "200px", height: "200px", border: "2px solid black" }}
      >
        {timer}s
      </div>

      <button onClick={handleReset}>Reset</button>
    </>
  );
}
