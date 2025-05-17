import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowRight,
  faCaretDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import NavigationData from "../data/navigations";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const HeaderNav = ({ setIsMobile, icon, setIcon }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const ico = icon ? faXmark : faBars;

  const handleMenu = () => {
    setIsMobile((prev) => !prev);
    setIcon(!icon);
  };

  return (
    <nav className="max-w-screen-lg ml-auto">
      <div className="flex items-center justify-end gap-8">
        {NavigationData.map((item, index) => (
          <motion.div
            key={index}
            className="hidden lg:block relative group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={item.path}
              className="py-6 inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span className="text-sm font-medium">{item.title}</span>
              {item.dropDown && (
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="text-xs transition-transform group-hover:rotate-180"
                />
              )}
            </Link>

            {item.dropDown && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute invisible group-hover:visible bg-white rounded-lg shadow-xl p-4 w-56 top-full"
              >
                <div className="flex flex-col gap-2">
                  {item.dropDown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-all"
                    >
                      <span>{subItem.title}</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}

        <button
          onClick={handleMenu}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FontAwesomeIcon icon={ico} className="text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default HeaderNav;
