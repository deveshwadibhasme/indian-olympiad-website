import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faArrowRight,
    faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import NavigationData from "../data/navigations";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MobileNav = ({ isMobile , setIsMobile}) => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseClick = (index) => {
        setActiveDropdown((prev) => (prev === index ? null : index));
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <AnimatePresence>
            {isMobile && (
                <motion.div
                    key="mobileNav" // added key here
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "-100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full lg:hidden h-screen absolute top-22 right-0 p-2 bg-white/80 flex flex-col items-center gap-5 z-50"
                >
                    {NavigationData.map((item, index) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, x: -23 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 23 }}
                                transition={{ duration: 0.3 }}
                                id="navItems"
                                className="relative text-center lg:flex"
                                key={index}
                                onClick={() => handleMouseClick(index)}
                                // onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    to={item.path}
                                    className="text-black transition-all text-sm uppercase font-semibold cursor-pointer text-center"
                                >
                                    <span className="hover:text-orange-500 peer text-center">
                                        {item.title}{" "}
                                        {item.dropDown && <FontAwesomeIcon icon={faCaretDown} />}
                                    </span>
                                </Link>
                                {activeDropdown === index &&
                                    item?.dropDown?.map((subItem, subIndex) => {
                                        return (
                                            <motion.div
                                                key={subIndex}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}                        
                                                transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                                            >
                                                <Link
                                                    to={subItem?.path}
                                                    className="group transition-all block w-full ml-2 mb-1 text-sm rounded-2xl relative text-white py-2 bg-orange-700 px-2"
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faArrowRight}
                                                        className="absolute transition-transform group-hover:translate-x-6 group-hover:opacity-100 opacity-0 right-10 bottom-0 transform -translate-y-1/2"
                                                    />
                                                    {subItem.title}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                            </motion.div>
                        );
                    })}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileNav;
