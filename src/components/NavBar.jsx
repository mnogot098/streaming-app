import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="text-white w-full flex justify-between px-4 py-4">
      <div className="flex items-center gap-2 px-4">
        <Link to={"/"}>
          <img src={logo} alt="not found" className="w-10" />
        </Link>

        <span className="font-bold text-xl">My cima</span>
      </div>
      <div className="px-8 flex gap-4">
        <button className="font-bold bg-red-600 px-6 rounded-sm hover:bg-red-800 ease-in-out duration-300">
          Login
        </button>
        <button className="font-bold border border-2 border-red-600 px-6">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavBar;
