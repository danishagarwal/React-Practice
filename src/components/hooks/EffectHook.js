import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "./ContextHook";

const EffectHook = () => {
  const [detail, setDetail] = useState([]);

  //Usecontext hook example
  const { name } = useContext(Appcontext);

  const callApi = async () => {
    const response = await fetch("https://reqres.in/api/users/");
    const data = await response.json();
    console.log(data);
    setDetail(data.data);
  };

  console.log(detail);

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      {detail.map((user) => (
        <div>
          {user.first_name} {user.last_name}
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default EffectHook;
