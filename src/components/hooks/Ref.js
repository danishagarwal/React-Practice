import React, { useState } from "react";
import { useRef } from "react";

const Ref = () => {
  let x = 0;
  const [st, setSt] = useState(0);
  const refVar = useRef(1);
  //console.log(refVar);
  return (
    <div className="border border-black w-96 h-96 p-2 m-2">
      <div>
        Let = {x}
        <button
          onClick={() => {
            x = x + 1;
            console.log("let Var " + x);
          }}
          className="p-2 ml-2 bg-green-100"
        >
          Increase X
        </button>
      </div>
      <div>
        State {st}{" "}
        <button
          onClick={() => setSt(st + 1)}
          className="p-2 mt-2 ml-2 bg-green-100"
        >
          Increase State
        </button>
        {console.log("State Var " + st)}
      </div>
      <div>
        Ref {refVar.current}
        <button
          onClick={() => {
            refVar.current += 1;
            console.log("RefVar " + refVar.current);
          }}
          className="p-2 mt-2 ml-2 bg-green-100"
        >
          Increase Ref
        </button>
      </div>
    </div>
  );
};

export default Ref;
