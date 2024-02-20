import React from "react";
import Navbar from "./../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MasterLayout({ userData, logout }) {
  console.log(userData)
  return (
    <>
      <div>
        <Navbar userData={userData} logout={logout} />
        <div className="container"><Outlet></Outlet></div>
      </div>
    </>
  );
}
