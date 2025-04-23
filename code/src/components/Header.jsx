import React, { useEffect, useState } from "react";

import HeaderStrip from "./HeaderStrip";

const Header = () => {


  return (
    <header className="max-w-screen w-full mx-auto bg-white shadow-md sticky top-0 z-50">
      <HeaderStrip/>
      <div>
        
      </div>
    </header>
  );
};

export default Header;
