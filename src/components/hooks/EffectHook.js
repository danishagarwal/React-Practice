import React, { useEffect, useState } from "react";

const EffectHook = () => {
  const [detail, setDetail] = useState([]);

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
        </div>
      ))}
    </div>
  );
};

export default EffectHook;
