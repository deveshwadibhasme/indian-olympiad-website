import React, { useEffect, useState } from "react";

const HeaderStrip = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 780) {
        setShow(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // Initial check
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{ display: show ? "flex" : "none" }}
      className="flex justify-between max-w-screen w-full gap-30 items-center bg-shade-blue text-black py-2"
    >
      <div className="h-10 pt-1 w-xl xl:max-w-80 pl-10 font-bold text-white uppercase text-xl relative">
        Indian Olympiad School
      </div>
      <div className="flex max-w-screen-md gap-18 w-full text-orange-300 relative text-lg">
        <span className="flex flex-col items-start text-orange-300 relative partition-line text-[16px] xl:text-lg">
          <span className="text-white font-semibold text-sm">
            CBSE Affiliation No:
          </span>
          1130804
        </span>
        <span className="flex flex-col items-start relative partition-line text-orange-300  text-[16px] xl:text-lg">
          <span className="text-white font-semibold text-sm">
            School U-DISE No:{" "}
          </span>{" "}
          27090501510 (CBSE)
        </span>
        <span className="flex flex-col items-start text-orange-300 text-[16px] xl:text-lg">
          <span className="text-white font-semibold text-sm">Contact No:</span>
          9823084786, 7028997786
        </span>
      </div>
    </div>
  );
};

export default HeaderStrip;
