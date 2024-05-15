import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="w-[40%] mt-16 flex justify-around align-middle
    
    "
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-gold text-gray-300 pt-4 pb-4"
    : "bg-gray-200 text-gray-100 hover:text-gold active:bg-gold active:text-gray-300 pt-4 pb-4"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-gold text-gray-300 pt-4 pb-4"
    : "bg-gray-200 text-gray-100hover:text-gold active:bg-gold active:text-gray-300 pt-4 pb-4"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        trending
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-gold text-gray-300 pt-4 pb-4"
    : "bg-gray-200 text-gray-100hover:text-gold active:bg-gold active:text-gray-300 pt-4 pb-4"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
