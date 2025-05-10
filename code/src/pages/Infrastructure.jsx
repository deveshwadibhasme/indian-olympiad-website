import React, { useEffect } from "react";
import { motion } from "framer-motion";
import InfrastructureDetails from "../data/infrastructure.js";

const Infrastructure = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="w-full flex-center min-h-screen mb-10 h-full flex-col relative mx-autobg-slate-50">
      <h1 className="text-2xl md:mt-2 md:text-heading relative hori-strip after:top-10 md:after:top-14 text-shade-blue-light text-center font-bold">
        School Infrastructure
      </h1>
      <p className="max-w-screen-lg text-center mx-auto mt-4">
        As per information furnished in CBSE Affiliation No. 1130804, and Letter
        No. CBSE/AFF//SS-00224-00224-2021/2020-21 dated 16/12/2020, School
        Infrastructure details are as follows.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4 mt-10 max-w-screen-xl mx-auto">
        {InfrastructureDetails.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h2 className="text-sm md:text-xl font-semibold text-gray-800">
              {item.srNo}
              {". "}
              {item.particular} {item.no && `(${item.no})`}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-medium">Dimension:</span> {item.dimension}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Infrastructure;
