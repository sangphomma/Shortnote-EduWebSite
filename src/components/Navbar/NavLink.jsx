import React from "react";
import { Link } from "react-scroll";

const NavLink = ({ href, link }) => {
  return (
    <li className="list-none cursor-pointer mr-8 ">
      <Link
        to={href}
        className="font-bold transition-all  duration-300"
        spy={true}
        smooth={true}
        duration={300}
        offset={-50}
      >
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
