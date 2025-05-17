import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRight,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import NavigationData from "../data/navigations";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = ({ isMobile, setIsMobile, setIcon }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseClick = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  const handleMouseLeave = (path) => {
    if (path.includes("/")) {
      setIsMobile(false);
      setIcon(false);
    }
  };

  return (
    <AnimatePresence>
      {isMobile && (
        <motion.div
          key="mobileNav"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "tween", stiffness: 100 }}
          className="fixed inset-0 bg-gradient-to-b from-white to-shade-blue-light/10 backdrop-blur-sm flex md:hidden flex-col items-center pt-20 px-3 z-50"
        >
          {NavigationData.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="w-full max-w-80 mb-2 mx-auto"
            >
              <div
                onClick={() => handleMouseClick(index)}
                className="bg-white/80 rounded-xl shadow-sm p-3 mx-auto hover:bg-shade-blue-light/10 transition-all"
              >
                <Link
                  to={item.path}
                  onClick={() => handleMouseLeave(item.path)}
                  className="flex items-center justify-between"
                >
                  <span className="text-gray-800 font-medium">{item.title}</span>
                  {item.dropDown && (
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className={`transform transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
              </div>

              <AnimatePresence>
                {activeDropdown === index && item.dropDown && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    {item.dropDown.map((subItem, subIndex) => (
                      <motion.div
                        key={subIndex}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: subIndex * 0.1 }}
                      >
                        <Link
                          to={subItem.path}
                          onClick={() => handleMouseLeave(subItem.path)}
                          className="flex items-center gap-2 px-4 py-2 my-1 ml-4 rounded-lg bg-shade-blue-light/10 hover:bg-shade-blue-light hover:text-white transition-all"
                        >
                          <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                          <span>{subItem.title}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
