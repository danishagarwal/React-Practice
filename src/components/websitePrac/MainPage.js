import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
const MainPage = () => {
  return (
    <div className="container mx-auto px-4">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainPage;
