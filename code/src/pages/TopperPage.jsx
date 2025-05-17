import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import getImageLink from "../utils/getImage";
import { sscToppers , hscToppers, alumni } from "../data/achievers-details";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
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
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    },
  },
};


const TopperCard = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
    <div className="max-w-7xl mx-auto px-4 py-1">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-indigo-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        SSC Toppers
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {sscToppers.map((topper, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/80 
                                   shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 border border-white/20"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl" />
            <img
              src={getImageLink(topper.image)}
              alt={topper.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200 shadow-lg"
            />
            <div className="text-center z-10 relative">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                {topper.name}
              </h3>
              <p className="text-indigo-700 font-medium">
                Batch of {topper.year}
              </p>
              <p className="text-lg font-semibold text-blue-600 mt-2">
                {topper.score}%
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* HSC Section */}
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-indigo-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        HSC Toppers
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {hscToppers.map((topper, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/80 
                                   shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 border border-white/20"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl" />
            <img
              src={getImageLink(topper.image)}
              alt={topper.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200 shadow-lg"
            />
            <div className="text-center z-10 relative">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                {topper.name}
              </h3>
              <p className="text-indigo-700 font-medium">
                Batch of {topper.year}
              </p>
              <p className="text-lg font-semibold text-blue-600 mt-2">
                {topper.score}%
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const AlumniCard = ({ alumni, index }) => (
  <motion.div
    className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/80 
                   shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 border border-white/20"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl" />
    <img
      src={getImageLink(alumni.image)}
      alt={alumni.name}
      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200 shadow-lg"
    />
    <div className="text-center z-10 relative">
      <h3 className="text-xl font-bold text-indigo-900 mb-2 flex items-center justify-center gap-2">
        <FontAwesomeIcon
          icon={faUserGraduate}
          className="text-blue-600 text-2xl"
        />
        {alumni.name}
      </h3>
      <p className="text-indigo-700 font-medium">Batch of {alumni.batch}</p>
      <p className="text-lg font-semibold text-blue-600 mt-2">
        {alumni.achievement}
      </p>
    </div>
  </motion.div>
);

const TopperPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-4xl md:text-6xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          <FontAwesomeIcon icon={faTrophy} className="text-amber-400 mr-3" />
          Our Achievers
        </motion.h1>

        <TopperCard />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
        >
          <FontAwesomeIcon
            icon={faUserGraduate}
            className="text-blue-600 mr-3"
          />
          Notable Alumni
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alum, i) => (
            <AlumniCard key={i} alumni={alum} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopperPage;
