import React from "react";
import introVideo from "../assets/sample-ios.mp4";

const HomePage = () => {
  return (
    <section className="w-full mx-auto bg-white">
      <video autoPlay loop muted className=" lg:w-full h-auto">
        <source src={introVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default HomePage;
