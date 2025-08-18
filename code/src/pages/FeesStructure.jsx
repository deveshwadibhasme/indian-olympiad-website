import React, { useEffect, useState } from "react";
import { selectedClass } from "../data/fees-structure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import getImage from "../utils/getImage";

const FeesStructure = () => {
  useEffect(() => {
    document.title = "Fees Structure - Indian Olympiad School";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore the detailed fee structure of Indian Olympiad School for the academic year 2022-2023."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore the detailed fee structure of Indian Olympiad School for the academic year 2022-2023.";
      document.head.appendChild(meta);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [feesInfo, setFeesInfo] = useState(null);

  const userSelect = (e) => {
    const selectedClassData = selectedClass(e.target.value);
    setFeesInfo({});
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
    exit: {
      y: -20,
      opacity: 0,
    },
  };

  return (
    <motion.section
      className="w-full flex-center min-h-screen py-2 bg-gradient-to-b from-slate-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
         <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-5xl md:text-6xl font-bold text-center my-6 mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          {/* <FontAwesomeIcon icon={faMoneyBill} className="text-amber-400 invisible" /> */}
          Fees Structure
        </motion.h1>

        <motion.div
          className="flex flex-col max-w-md mx-auto items-center mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <select
            onChange={userSelect}
            className="w-full py-3 px-4 text-lg rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
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

        <div className={`max-w-2xl mx-auto ${feesInfo !== null && 'min-h-96'}`}>
          <AnimatePresence mode="wait">
            {feesInfo && (
              <motion.div
                key={feesInfo.class}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="backdrop-blur-sm bg-white/90 rounded-2xl shadow-xl p-6"
              >
                <h2 className="text-3xl text-center text-blue-600 font-bold mb-8">
                  {feesInfo.class}
                </h2>
                <motion.div className="space-y-4" variants={containerVariants}>
                  {[
                    { label: "First Quarter (On Admission)", value: feesInfo.firstQuarter },
                    { label: "Second Quarter (1-10 AUG)", value: feesInfo.secondQuarter },
                    { label: "Third Quarter (1-10 NOV)", value: feesInfo.thirdQuarter },
                    { label: "Fourth Quarter (1-10 JAN)", value: feesInfo.fourthQuarter },
                    { label: "Total Fees (Yearly)", value: feesInfo.totalFees }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 transform hover:scale-102 transition-transform duration-200"
                      variants={itemVariants}
                    >
                      <div className="text-white font-medium mb-2">{item.label}</div>
                      <div className="bg-white text-gray-800 rounded-lg py-2 px-4 text-center text-xl font-semibold">
                        {item.value}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.p
          className="max-w-3xl text-center mx-auto mt-10 text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          CBSE school fees in Nagpur, like in other cities in India, can vary
          depending on several factors, including the reputation and facilities of
          the school, grade level, location, and other additional services
          provided by the institution. It's important to note that the specific
          fee structure for each academic year may change over time. "Admission
          fees for Nursery to Std. XII, Rs. 2000/- per student at the time of
          admission only. Payment should be made only by Cheque in favour of
          INDIAN OLYMPIAD SCHOOL. Please write the name and class of student at
          the back of Cheque". To get detailed and accurate information about the
          IOS Nagpur CBSE school fees. it's recommended to directly contact the
          school for your doubts specific academic year you are considering. This
          will ensure you have the most relevant and up-to-date information.
        </motion.p>

        <motion.a
          href={getImage('/assets-docs/Fees Structure 2025-2026.pdf')}
          download
          target="_blank"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full font-medium mt-8 block w-fit mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 120 }}
        >
          Download Fees Structure
        </motion.a>
      </div>
    </motion.section>
  );
};

export default FeesStructure;
