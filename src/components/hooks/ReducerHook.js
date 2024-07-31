import React, { useReducer } from "react";

const ReducerHook = () => {
  //Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1, showText: !state.showText };
      default:
        return state;
    }
  };

  //Reducer hook syntax
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      {state.showText && <p>Hello Dan</p>}
    </div>
  );
};

export default ReducerHook;
