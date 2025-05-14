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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full min-h-screen py-5 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl relative text-shade-blue-light text-center font-bold mb-8"
        >
          School Infrastructure
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-center mx-auto mt-4 text-gray-600 text-lg mb-12"
        >
          As per information furnished in CBSE Affiliation No. 1130804, and Letter
          No. CBSE/AFF//SS-00224-00224-2021/2020-21 dated 16/12/2020, School
          Infrastructure details are as follows.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6"
        >
          {InfrastructureDetails.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start space-x-2">
                <span className="text-shade-blue-light font-bold">{item.srNo}.</span>
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.particular} {item.no && `(${item.no})`}
                </h2>
              </div>
              <div className="mt-4 px-4 py-2 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-medium text-shade-blue-light">Dimension:</span>{' '}
                  {item.dimension}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Infrastructure;
