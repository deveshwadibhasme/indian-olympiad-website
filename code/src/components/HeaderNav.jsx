import React from "react";
import NavigationData from "../data/navigations";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="max-w-screen-lg w-full flex items-center justify-between">
      {NavigationData.map((item, index) => {
        return (
          <>
            <Link
            to={item.path}
              key={index}
              className="text-black relative text-lg font-semibold hover:text-orange-300 cursor-pointer"
            >
              <span>{item.title}</span>
              <div>
                {item.dropDown && (
                  <div className="absolute max-w-50 top-10 left-0 bg-white shadow-lg rounded-md p-2">
                    {item.dropDown.map((subItem, subIndex) => {
                      return (
                        <Link
                          to={subItem.path}
                          key={subIndex}
                          className="block text-black hover:text-orange-300 py-1 px-2"
                        >
                          {subItem.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default HeaderNav;
