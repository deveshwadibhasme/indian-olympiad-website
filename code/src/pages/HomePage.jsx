import React, { useEffect } from "react";
import { motion } from "framer-motion";
import introVideo from "../assets/sample-ios-1.mp4";
import WelcomePage from "../layouts/WelcomePage";
import Branches from "../layouts/Branches";
import WhyCBSE from "../layouts/WhyCBSE";
import StatsBanner from "../layouts/StatsBanner";
import DirectorCTA from "../layouts/DirectorCTA";

const HomePage = () => {
  useEffect(() => {
    document.title = "Indian Olympiad School - Home";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Welcome to Indian Olympiad School, the best CBSE school in Nagpur. Explore our curriculum, infrastructure, and more."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Welcome to Indian Olympiad School, the best CBSE school in Nagpur. Explore our curriculum, infrastructure, and more.";
      document.head.appendChild(meta);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section className="w-full mx-auto bg-white relative shaded-bg">
        <video
          width={"1080px"}
          height={"720px"}
          autoPlay
          loop
          muted
          className="lg:w-full relative h-full md:h-auto"
        >
          <source src={introVideo} type="video/mp4" />
        </video>
        <motion.div
          className="absolute top-1/2 mt-8 lg:mt-0 text-center lg:top-1/3 w-full mx-auto -translate-y-1/2 -translate-x-1/2 left-1/2 md:left-1/2 z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className=" text-white -translate-y-1/2 text-2xl md:text-3xl text-shadow-[0px_4px_10px] text-shadow-black font-normal left-1/2 w-full max-w-screen z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="block -mb-5 text-3xl md:text-7xl lg:text-8xl text-white font-bold">
              Indian Olympiad School
            </span>
            <br></br>We Enter to Learn Leave to Achieve
          </motion.h1>
          {/* <button className="flex items-center bg-white text-black px-6 py-3 rounded-full text-sm md:text-lg font-medium hover:bg-shade-blue-light transition duration-300 cursor-pointer">
            Explore More
            <span className="ml-2">&rarr;</span>
          </button> */}
        </motion.div>
      </section>
      <WelcomePage />
      <DirectorCTA/>
      <WhyCBSE />
      <StatsBanner />
      <Branches />
    </>
  );
};

export default HomePage;
