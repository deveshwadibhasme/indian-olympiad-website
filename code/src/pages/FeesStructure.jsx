import React, { useEffect, useState } from "react";
import { selectedClass } from "../data/fees-structure";
import { motion, AnimatePresence } from "framer-motion";

const FeesStructure = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  const [feesInfo, setFeesInfo] = useState(null);

  const userSelect = (e) => {
    const selectedClassData = selectedClass(e.target.value);
    setFeesInfo(null);
    setTimeout(() => {
      setFeesInfo(selectedClassData);
    }, 100);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className="w-full flex-center min-h-screen mb-10 h-full flex-col relative mx-autobg-slate-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl md:mt-2 md:text-heading relative hori-strip after:top-10 md:after:top-17 text-shade-blue-light text-center font-bold">
        Fee Structure
      </h1>
      <motion.div
        className="flex flex-col max-w-xs md:max-w-sm mx-auto items-center mt-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <select
          onChange={userSelect}
          name="class"
          id=""
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="" hidden>
            Select Class
          </option>
          <option value="Pre Nursery">Pre-Nursery</option>
          <option value="Nursery">Nursery</option>
          <option value="KG-I">KG-I</option>
          <option value="KG-II">KG-II</option>
          <option value="Std-I">Std-I</option>
          <option value="Std-II">Std-II</option>
          <option value="Std-III">Std-III</option>
          <option value="Std-IV">Std-IV</option>
          <option value="Std-V">Std-V</option>
          <option value="Std-VI">Std-VI</option>
          <option value="Std-VII">Std-VII</option>
          <option value="Std-VIII">Std-VIII</option>
          <option value="Std-IX">Std-IX</option>
          <option value="Std-X">Std-X</option>
        </select>
      </motion.div>
      <div className="max-w-screen-sm mx-auto mt-5 p-2">
        <AnimatePresence>
          {feesInfo && (
            <motion.div
              key={feesInfo.class}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              // exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            >
              <h2 className="text-3xl text-center text-blue-600 font-semibold mb-4">
                {feesInfo.class}
              </h2>
              <motion.div
                className="bg-white flex flex-col gap-3 shadow-md rounded-lg p-1 uppercase"
                variants={containerVariants}
              >
                <motion.span
                  className="p-2 rounded-2xl gap-2 text-center text-white bg-orange-600 flex flex-col"
                  variants={itemVariants}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                >
                  <span>First Quarter (On Admission):</span>
                  <span className="text-lg p-1 bg-white text-black w-50 mx-auto rounded-lg">
                    {feesInfo.firstQuarter} 
                  </span>
                </motion.span>
                <motion.span
                  className="p-2 rounded-2xl gap-2 text-center text-white bg-orange-600 flex flex-col"
                  variants={itemVariants}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                >
                  <span> Second Quarter (1-10 AUG):</span>
                  <span className="text-lg p-1 bg-white text-black w-50 mx-auto rounded-lg">
                    {feesInfo.secondQuarter}
                  </span>
                </motion.span>
                <motion.span
                  className="p-2 rounded-2xl gap-2 text-center text-white bg-orange-600 flex flex-col"
                  variants={itemVariants}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                >
                  <span>Third Quarter (1-10 NOV):</span>
                  <span className="text-lg p-1 bg-white text-black w-50 mx-auto rounded-lg">
                    {feesInfo.thirdQuarter}
                  </span>
                </motion.span>
                <motion.span
                  className="p-2 rounded-2xl gap-2 text-center text-white bg-orange-600 flex flex-col"
                  variants={itemVariants}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                >
                  <span> Fourth Quarter (1-10 JAN):</span>
                  <span className="text-lg p-1 bg-white text-black w-50 mx-auto rounded-lg">
                    {feesInfo.fourthQuarter}
                  </span>
                </motion.span>
                <motion.span
                  className="p-2 rounded-2xl gap-2 text-center text-white bg-orange-600 flex flex-col"
                  variants={itemVariants}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                >
                  <span> Total Fees (Yearly):</span>
                  <span className="text-lg p-1 bg-white text-black w-50 mx-auto rounded-lg">
                    {feesInfo.totalFees}
                  </span>
                </motion.span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.p
        className="transition max-w-screen-lg text-center text-sm md:text-lg mx-auto mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        CBSE school fees in Nagpur, like in other cities in India, can vary
        depending on several factors, including the reputation and facilities of
        the school, grade level, location, and other additional services
        provided by the institution. It’s important to note that the specific
        fee structure for each academic year may change over time. “Admission
        fees for Nursery to Std. XII, Rs. 2000/- per student at the time of
        admission only. Payment should be made only by Cheque in favour of
        INDIAN OLYMPIAD SCHOOL. Please write the name and class of student at
        the back of Cheque”. To get detailed and accurate information about the
        IOS Nagpur CBSE school fees. it’s recommended to directly contact the
        school for your doubts specific academic year you are considering. This
        will ensure you have the most relevant and up-to-date information.
      </motion.p>
      <motion.a
        href="unavailable"
        className="transition-all transformtext-lg font-semibold text-blue-400 w-60 mt-5 block mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 120 }}
      >
        Download Fees Structure
      </motion.a>
    </motion.section>
  );
};

export default FeesStructure;
