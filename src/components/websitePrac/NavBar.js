import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState("real"); // Default active link

  return (
    <>
      <nav className="flex space-x-10 border-b-2 border-gray-300">
        <Link
          to="real"
          onClick={() => setActive("real")}
          className={`text-gray-600 py-2 ${
            active === "real"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "border-b-4 border-transparent"
          }`}
        >
          Get a real number
        </Link>
        <Link
          to="numbers"
          onClick={() => setActive("numbers")}
          className={`text-gray-600 py-2 ${
            active === "numbers"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "border-b-4 border-transparent "
          }`}
        >
          My Numbers
        </Link>
        <Link
          to="history"
          onClick={() => setActive("history")}
          className={`text-gray-600 py-2 ${
            active === "history"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "border-b-4 border-transparent "
          }`}
        >
          History
        </Link>
        <Link
          to="api"
          onClick={() => setActive("api")}
          className={`text-gray-600 py-2 ${
            active === "api"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "border-b-4 border-transparent "
          }`}
        >
          Api
        </Link>
        <Link
          to="faq"
          onClick={() => setActive("faq")}
          className={`text-gray-600 py-2 ${
            active === "faq"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "border-b-4 border-transparent "
          }`}
        >
          FAQ
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
