import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faUserGraduate, faStar } from "@fortawesome/free-solid-svg-icons";
import getImageLink from "../utils/getImage"; 
import { achievers } from "../data/achievers-details";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, type: "spring", stiffness: 300 },
  },
};

const AchieverCard = ({ achiever, index }) => (
  <motion.div
    className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/80 
               shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 border border-white/20"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-300/30 to-yellow-400/30 rounded-full blur-3xl" />
    <img
      src={getImageLink(achiever.image)}
      alt={achiever.name}
      className="w-35 h-35 rounded-full mx-auto mb-4 object-top object-cover border-4 border-amber-300 shadow-lg"
    />
    <div className="text-center z-10 relative">
      <h3 className="text-2xl font-bold text-indigo-900 mb-2 flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faUserGraduate} className="text-blue-600" />
        {achiever.name}
      </h3>
      <p className="text-indigo-700 font-medium mb-1">{achiever.schoolInfo}</p>
      <p className="text-sm font-semibold text-amber-600">{achiever.titles}</p>
    </div>
  </motion.div>
);

const LegacyCard = ({ legacy, index }) => (
  <motion.div
    className="bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-xl shadow-lg p-6 text-center"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    custom={index}
    whileHover="hover"
  >
    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-4xl mb-3" />
    <p className="text-lg font-semibold text-indigo-800">{legacy}</p>
  </motion.div>
);

const AchieversPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  

  const legacyStats = [
    "10+ in IIT",
    "15+ in NIT",
    "15+ in MBBS",
    "20+ in BDS",
    "25+ in Foreign Universities",
    "And the legacy continues..."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-4xl lg:text-6xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          <FontAwesomeIcon icon={faTrophy} className="text-amber-400 mr-3" />
          Our Achievers
        </motion.h1>

        {/* Achievers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievers.map((achiever, i) => (
            <AchieverCard key={i} achiever={achiever} index={i} />
          ))}
        </div>

        {/* Legacy Section */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl font-bold text-center mt-16 mb-8 text-indigo-700"
        >
          Legacy of Excellence
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {legacyStats.map((stat, i) => (
            <LegacyCard key={i} legacy={stat} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchieversPage;
