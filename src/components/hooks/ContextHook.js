import React, { createContext } from "react";

import EffectHook from "./EffectHook";

export const Appcontext = createContext(null);
const ContextHook = () => {
  const name = "Danish";
  return (
    <Appcontext.Provider value={{ name }}>
      <EffectHook />
    </Appcontext.Provider>
  );
};

export default ContextHook;
