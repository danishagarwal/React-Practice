import React from "react";
import { useRef } from "react";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    console.log(email.current.value);
    console.log(password);
  };

  return (
    <div className="bg-slate-200">
      <div className="p-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Name</h1>
          <input
            className="text-sm p-1 rounded-lg my-2 bg-gray-100"
            type="text"
          />
          <h1>Email</h1>
          <input
            ref={email}
            className="text-sm p-1 rounded-lg my-2 bg-gray-100"
            type="email"
          />

          <h1>Password</h1>
          <input
            ref={password}
            className="text-sm p-1 rounded-lg my-2 bg-gray-100"
            type="password"
          />

          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
