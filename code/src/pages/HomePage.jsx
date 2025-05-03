import React from "react";
import { motion } from "framer-motion";
import introVideo from "../assets/sample-ios.mp4";
import WelcomePage from "../layouts/WelcomePage";
import Branches from "../layouts/Branches";

const HomePage = () => {
  return (
    <>
      <section className="w-full mx-auto bg-white relative shaded-bg">
        <video width={'1080px'} height={'720px'} autoPlay  loop muted className="lg:w-full relative h-full md:h-auto">
          <source src={introVideo} type="video/mp4" />
        </video>
        <motion.div
          className="absolute top-1/2 lg:top-1/4 -translate-y-1/2 left-2 md:left-15 z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
        <motion.h1
          className=" text-white -translate-y-1/2 text-2xl md:text-5xl text-shadow-[0px_4px_10px] text-shadow-black font-semibold left-2 md:left-15 w-70 md:w-110 z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          We Enter to Learn Leave to Achieve
        </motion.h1>
          <button className="flex items-center bg-white text-black px-6 py-3 rounded-full text-sm md:text-lg font-medium hover:bg-blue-600 transition duration-300 cursor-pointer">
            Explore More
            <span className="ml-2">&rarr;</span>
          </button>
        </motion.div>
      </section>
      <WelcomePage />
      <Branches/>
    </>
  );
};

export default HomePage;
