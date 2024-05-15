import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/allcurrency.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
     relative top-[1rem] left-[1rem] 
     border-b border-gold
     "
    >
      <img src={logoSvg} alt="allCurrency" />
    </Link>
  );
};

export default Logo;
