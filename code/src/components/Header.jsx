import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useScroll } from "framer-motion";
import Logo from '../assets/logo.png';
import HeaderStrip from "./HeaderStrip";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 10) {
        controls.start({ height: "60px" });
      } else {
        controls.start({ height: "100px" });
      }
    });

    return () => unsubscribe();
  }, [scrollY, controls]);

  return (
    <motion.header
      className="max-w-screen w-full mx-auto bg-white shadow-md sticky top-0 z-50"
      animate={controls}
      initial={{ height: "100px" }}
    >
      <HeaderStrip />
      <div className="flex w-full bg-white mx-auto items-center justify-between px-4 py-2">
        <img src={Logo} alt="" className="h-20" />
        <HeaderNav />
      </div>
    </motion.header>
  );
};

export default Header;
