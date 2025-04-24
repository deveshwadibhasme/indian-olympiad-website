import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars ,faArrowRight} from "@fortawesome/free-solid-svg-icons";
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
    <div className="max-w-screen-lg  flex items-center gap-14 ">
      {NavigationData.map((item, index) => {
        return (
          <div
            id="navItems"
            className="relative hidden md:flex"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            // onMouseLeave={handleMouseLeave}
          >
            <Link
              to={item.path}
              className="text-black text-sm font-semibold cursor-pointer"
            >
              <span className="hover:text-orange-500 peer">{item.title}</span>
            </Link>
            {item.dropDown && activeDropdown === index && (
              <motion.div
                id="dropDown"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute w-50 top-15 left-0 bg-white shadow-lg rounded-md p-2 flex flex-col gap-5 overflow-x-hidden"
                onMouseEnter={() => handleMouseEnter(index)} // Keep dropdown open
                onMouseLeave={handleMouseLeave} // Close dropdown when leaving
              >
                {item.dropDown.map((subItem, subIndex) => {
                  return (
                    <Link
                    to={subItem.path}
                    key={subIndex}
                    className="group block w-full ml-2 relative text-black py-1 px-2"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="absolute transition-transform group-hover:translate-x-6 group-hover:opacity-100 opacity-0 right-10 top-1/2 transform -translate-y-1/2"
                    />
                    {subItem.title}
                  </Link>
                  );
                })}
              </motion.div>
            )}
          </div>
        );
      })}
      <div className="block md:hidden cursor-pointer bg-orange-500 p-3 rounded-4xl">
      <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default HeaderNav;
