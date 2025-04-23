import React, { useEffect, useState } from "react";
import Logo from '../assets/logo.png';

import HeaderStrip from "./HeaderStrip";
import HeaderNav from "./HeaderNav";

const Header = () => {


  return (
    <header className="max-w-screen w-full mx-auto bg-white shadow-md sticky top-0 z-50">
      <HeaderStrip/>
      <div className="flex max-w-screen-xl w-full bg-white mx-auto items-center gap-30 px-4 py-2">
        <img src={Logo} alt="" />
        <HeaderNav/>
      </div>
    </header>
  );
};

export default Header;
