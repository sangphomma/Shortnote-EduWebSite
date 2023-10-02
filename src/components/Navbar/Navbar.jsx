import React, { useState } from "react";
import { navLinks } from "../../Data";

import { MdMenu } from "react-icons/md";
import NavLink from "./NavLink";
import MobNavLink from "./MobNavLink";
import { BsX } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  //console.log(navLinks);
  return (
    <div className="w-full z-20 fixed top-0 left-0">
      <div className="container flex justify-between px-2 py-4 mx-auto">
        <div className="flex items-center gap-4">
          {/* <HiMenuAlt1 className="text-3xl sm:hidden cursor-pointer" />

          <HiX className="hidden" /> */}
          <MdMenu
            onClick={() => setToggle(!toggle)}
            className="text-3xl sm:hidden cursor-pointer"
          />
          <div className="font-Poppins text-Teal text-xl uppercase font-bold">
            Skillex
          </div>
        </div>
        <div className="hidden sm:flex items-center">
          {navLinks.map((nlink, idx) => {
            return <NavLink key={idx} href={nlink.href} link={nlink.link} />;
          })}
        </div>
        <div className="">
          <button className="py-3 px-6 border font-bold text-sm border-solid border-gray rounded-lg">
            Sign Up
          </button>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center 
            gap-8 shadow-lg py-8
            fixed bg-Teal text-white top-0 left-0 h-full w-96 "
            >
              {navLinks.map((navlink, idx) => (
                <MobNavLink
                  key={idx}
                  href={navlink.href}
                  link={navlink.link}
                  setToggle={setToggle}
                />
              ))}

              <div>
                <BsX
                  onClick={() => setToggle(!toggle)}
                  className="absolute top-12 right-12 text-3xl cursor-pointer"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
