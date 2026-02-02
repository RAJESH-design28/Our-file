import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mx-48 text-white flex items-center justify-between bg-[#005555] w-[1140px] py-6 px-8 rounded-md">
      <h1 className="text-xl text-white/60 font-semibold">Arin Dalal</h1>

      <nav className="space-x-4 ">
        <Link to="/">Home</Link>
        <Link to="/">Services</Link>
        <Link to="/">About </Link>
        <Link to="/">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
