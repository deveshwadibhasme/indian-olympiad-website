import React from "react";
import BhilGao from "../assets/ios-bhilgaon-img.png";
import PrashantNag from "../assets/prashant-nagar-img.jpg";

const Branches = () => {
  return (
    <section
      id="branches"
      className="w-full max-w-screen flex flex-col h-96 gap-x-10 mx-auto bg-white relative"
    >
      <h1 className="text-3xl mt-10 md:mt-2 md:text-6xl mb-10 text-blue-600 text-center font-bold">Our Branches</h1>
      <div className="flex justify-evenly items-center w-full gap-0 flex-row">
        <div className="max-w-50 md:max-w-screen-md w-full min-h-38 md:min-h-96 object-cover border border-white relative shaded-bg after:bg-violet-400/40 h-full">
          <img src={BhilGao} className="object-cover w-full h-full" alt="" />
          <div className="absolute top-1/2 left-1/2 gap-5 -translate-1/2 w-full z-5 flex flex-col items-center">
            <h2 className="text-xl md:text-4xl max-w-90 w-full text-center font-semibold text-white mb-6 relative z-10">
              Bhilgaon
            </h2>
            <button className="bg-blue-400 text-sm md:text-lg p-1 md:p-2 rounded-2xl w-[70%] md:w-[50%] mx-auto">
              Explore More &rarr;
            </button>
          </div>
        </div>
        <div className="max-w-50 md:max-w-screen-md w-full min-h-38 md:min-h-96 object-cover border border-white relative shaded-bg after:bg-violet-400/40 h-full">
          <img
            src={PrashantNag}
            className="object-cover w-full h-full"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 gap-5 -translate-1/2 w-full z-5 flex flex-col items-center">
            <h2 className="text-xl md:text-4xl max-w-90 w-full text-center font-semibold text-white mb-6 relative z-10">
              Prashant Nagar
            </h2>
            <button className="bg-blue-400 text-sm md:text-lg p-1 md:p-2 rounded-2xl w-[70%] md:w-[50%] mx-auto">
              Explore More &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
