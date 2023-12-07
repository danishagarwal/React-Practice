import React, { useEffect, useState } from "react";

const TipCalc = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [p, setP] = useState(0);
  const [perPerson, setPerPerson] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(parseFloat(bill) * (parseFloat(tip) * 0.01));
    const tipPerPerson = total / parseFloat(p);
    setPerPerson(tipPerPerson);
  }, [bill, tip, p]);

  return (
    <div className="bg-gray-200 w-48 mx-auto my-32">
      <div className="p-2">
        <label className="font-bold">Bill</label>
        <br></br>
        <input
          onChange={(e) => setBill(e.target.value)}
          className="border border-black"
          onCha
          type="number"
        ></input>

        <label className="font-bold">Tip Percentage</label>
        <br></br>
        <input
          onChange={(e) => setTip(e.target.value)}
          className="border border-black"
          type="number"
        ></input>

        <label className="font-bold">No of People</label>
        <br></br>
        <input
          onChange={(e) => setP(e.target.value)}
          className="border border-black"
          type="text"
        ></input>

        <p className="text-right mt-2">Total Tip ${total} </p>

        <p className="text-right mt-2">Tip Per Person ${perPerson}</p>
      </div>
    </div>
  );
};

export default TipCalc;
