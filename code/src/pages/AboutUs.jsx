import React, { useEffect } from "react";
import aboutUsData from "../data/about-us";
import { motion } from "framer-motion";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="w-full flex-center min-h-screen h-full mt-2 md:mt-14 flex-col relative mx-auto bg-slate-50">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:mt-2 relative hori-strip after:top-15 md:text-4xl text-blue-600 text-center font-bold"
      >
        ABOUT US | IOS
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true , amount: 0.2 }}
        className="max-w-screen-lg text-center mx-auto mt-10"
      >
        Indian Olympaid School is one of the trusted Top CBSE school in nagpur.
        The Indian Olympaid School is recognized throughout the academic world
        for its progressive approach and commitment to excellence.They provide
        excellent facilities with experienced faculty. They provide facilities
        like:
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-10 max-w-screen-xl mx-auto">
        {aboutUsData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 , delay: index * 0.2 }}
            key={index}
            className="bg-white max-w-sm w-full shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
