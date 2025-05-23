import React, { useEffect } from "react";
import { motion } from "framer-motion";
import introVideo from "../assets/sample-ios.mp4";
import WelcomePage from "../layouts/WelcomePage";
import Branches from "../layouts/Branches";
import WhyCBSE from "../layouts/WhyCBSE";
import StatsBanner from "../layouts/StatsBanner";

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
        <video width={'1080px'} height={'720px'} autoPlay  loop muted className="lg:w-full relative h-full md:h-auto">
          <source src={introVideo} type="video/mp4" />
        </video>
        <motion.div
          className="absolute top-1/2 lg:top-1/3 -translate-y-1/2 left-2 md:left-15 z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
        <motion.h1
          className=" text-white -translate-y-1/2 text-2xl md:text-heading text-shadow-[0px_4px_10px] text-shadow-black font-semibold left-2 md:left-15 w-70 md:w-110 z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          We Enter to Learn Leave to Achieve
        </motion.h1>
          <button className="flex items-center bg-white text-black px-6 py-3 rounded-full text-sm md:text-lg font-medium hover:bg-shade-blue-light transition duration-300 cursor-pointer">
            Explore More
            <span className="ml-2">&rarr;</span>
          </button>
        </motion.div>
      </section>
      <WelcomePage />
      <WhyCBSE/>
      <StatsBanner/>
      <Branches />
    </>
  );
};

export default HomePage;
