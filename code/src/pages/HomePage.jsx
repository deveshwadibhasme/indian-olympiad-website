import React from "react";
import introVideo from "../assets/sample-ios.mp4";
import WelcomePage from "../layouts/WelcomePage";

const HomePage = () => {
  return (
    <>
      <section className="w-full mx-auto bg-white relative shaded-bg">
        <video autoPlay loop muted className=" lg:w-full relative h-auto">
          <source src={introVideo} type="video/mp4" />
        </video>
        <div className="absolute top-1/4 text-white -translate-y-1/2 text-2xl md:text-5xl text-shadow-[0px_4px_10px] text-shadow-black font-semibold left-2 md:left-15 w-70 md:w-110 z-10">
          We Enter to Learn Leave to Achieve
        </div>
        <div className="absolute top-30 md:top-70 left-2 md:left-15 z-10">
          <button className="flex items-center bg-white text-black px-6 py-3 rounded-full text-sm md:text-lg font-medium hover:bg-blue-600 transition duration-300 cursor-pointer">
            Explore More
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </section>
      <WelcomePage />
    </>
  );
};

export default HomePage;
