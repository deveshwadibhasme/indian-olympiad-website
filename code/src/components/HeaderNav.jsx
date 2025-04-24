import React, { useState } from "react";
import NavigationData from "../data/navigations";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="max-w-screen-lg flex items-center gap-14">
      {NavigationData.map((item, index) => {
        return (
          <div
            id="navItems"
            className="relative"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            // onMouseLeave={handleMouseLeave}
          >
            <Link
              to={item.path}
              className="text-black text-lg font-semibold cursor-pointer"
            >
              <span className="hover:text-orange-300 peer">{item.title}</span>
            </Link>
            {item.dropDown && activeDropdown === index && (
              <motion.div
                id="dropDown"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute w-50 top-15 left-0 bg-white shadow-lg rounded-md p-2 flex flex-col gap-5"
                onMouseEnter={() => handleMouseEnter(index)} // Keep dropdown open
                onMouseLeave={handleMouseLeave} // Close dropdown when leaving
              >
                {item.dropDown.map((subItem, subIndex) => {
                  return (
                    <Link
                      to={subItem.path}
                      key={subIndex}
                      className="block w-full ml-2 text-black py-1 px-2"
                    >
                      {subItem.title}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderNav;
