import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/service",
      label: "Service",
    },
    {
      to: "/contact",
      label: "Contact Us",
    },
  ];
  return (
    <header className="mx-auto text-white flex items-center justify-between bg-[#005555] w-[1140px] py-6 px-8 rounded-md">
      <h1 className="text-xl text-white/60 font-semibold">Arin </h1>

      <nav className="space-x-4 ">
        {links.map((el) => (
          <NavLink
            to={el.to}
            className={({ isActive }) => `${isActive && "text-red-500"}`}
          >
            {el.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
