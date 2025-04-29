import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import HeaderStrip from "./HeaderStrip";
import HeaderNav from "./HeaderNav";
import MobileNav from "../layouts/MobileNav";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
   const [icon,setIcon] = useState(false);


  return (
    <header className="max-w-screen w-full mx-auto bg-white shadow-md fixed top-0 z-50">
      <HeaderStrip />
      <div className="flex w-full bg-white mx-auto items-center relative justify-between px-4 py-2">
        <img src={Logo} alt="" className="h-20" />
        <MobileNav isMobile={isMobile} setIsMobile={setIsMobile} setIcon={setIcon}  />
        <HeaderNav setIsMobile={setIsMobile} icon={icon} setIcon={setIcon}  />
      </div>
    </header>
  );
};

export default Header;
