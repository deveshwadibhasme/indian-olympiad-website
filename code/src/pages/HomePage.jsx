import React from "react";
import introVideo from "../assets/sample-ios.mp4";

const HomePage = () => {
  return (
    <section className="max-w-screen-2xl w-full mx-auto bg-white">
      <video width={1440} autoPlay loop muted className="w-auto lg:w-full h-auto">
        <source src={introVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default HomePage;
