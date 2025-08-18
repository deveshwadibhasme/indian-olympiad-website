import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwatchbook} from "@fortawesome/free-solid-svg-icons";

const SchoolTiming = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container p-4 w-full min-h-screen mb-10 mx-auto bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, type: "spring" }}
                  className="text-5xl md:text-6xl font-bold text-center my-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
                >
                  {/* <FontAwesomeIcon icon={faSwatchbook} className="text-amber-400 invisible" /> */}
                  School Timing
                </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 p-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              IOS School Timings
            </h2>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-md">
                <p className="font-semibold text-gray-700">Nursery to Kindergarten</p>
                <p className="text-blue-600">10:00 am to 12:30 pm</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-md">
                <p className="font-semibold text-gray-700">Grade I & II</p>
                <p className="text-blue-600">8:00 am to 12:30 pm</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-md">
                <p className="font-semibold text-gray-700">Grade III to XII</p>
                <p className="text-blue-600">8:00 am to 2:30 pm</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Administration Office
            </h2>
            <div className="p-3 bg-blue-50 rounded-md">
              <p className="font-semibold text-gray-700">Working Hours</p>
              <p className="text-blue-600">8:00 am to 3:00 pm</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SchoolTiming;
