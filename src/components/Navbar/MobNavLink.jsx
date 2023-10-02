import React from "react";
import { Link } from "react-scroll";

const MobNavLink = ({ href, link, setToggle }) => {
  return (
    <li className="list-none cursor-pointer mr-8 ">
      <Link
        to={href}
        className="font-bold transition-all  duration-300"
        spy={true}
        smooth={true}
        duration={300}
        offset={-50}
        onClick={(prev) => setToggle(!prev)}
      >
        {link}
      </Link>
    </li>
  );
};

export default MobNavLink;
