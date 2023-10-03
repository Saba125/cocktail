import React from "react";
import Cocktail from "../assets/cocktail.jpg";
import { Link } from "react-router-dom";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full max-w-[1250px] mx-auto flex justify-between items-center py-8">
      <Link to="/" className="inline-block">
        <img
          className="w-16 h-16 rounded-full cursor-pointer"
          src={Cocktail}
          alt=""
        />
      </Link>
      <ul>
        <Link to="/about" className="text-lg " >About</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
