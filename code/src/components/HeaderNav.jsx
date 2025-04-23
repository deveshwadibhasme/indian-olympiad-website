import React from "react";
import NavigationData from "../data/navigations";
import { Link } from "react-router-dom";

const HeaderNav = () => {

  const handleMouseArrive = (e) => {
    const target = e.target;
    const dropdown = target.parentNode.parentNode.childNodes[1];
    if (dropdown) {
      dropdown.style.display = "block";
    }
  };
  const handleMouseExit = (e) => {
    const target = e.target.parentNode.querySelector("#dropDown");
    if (target) {
      target.style.display = "none";
    }
  };

  return (
    <div className="max-w-screen-lg flex items-center gap-14">
      {NavigationData.map((item, index) => {
        return (
          <div id="navItems" className="relative" key={index}>
            <Link
              to={item.path}
              key={index}
              className="text-black text-lg font-semibold  cursor-pointer"
            >
              <span
                onMouseEnter={(e) => handleMouseArrive(e)}
                className="hover:text-orange-300 peer"
              >
                {item.title}
              </span>
            </Link>
            {item.dropDown && (
              <div
              id="dropDown"
                onMouseLeave={(e) => handleMouseExit(e)}
                style={{ display: "none" }}
                className="absolute w-50 top-15 left-0 bg-white shadow-lg rounded-md p-2 flex flex-col gap-5"
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
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderNav;
