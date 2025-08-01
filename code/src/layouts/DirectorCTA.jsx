// DirectorCTA.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import getImageLink from "../utils/getImage";

const DirectorCTA = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleDirectorClick = () => {
    navigate("/directors-desk");
  };

  return (
    <motion.section
      className={`py-5 w-full max-w-7xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer group"
          onClick={handleDirectorClick}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="w-full md:w-2/5 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <img
                loading="lazy"
                src={getImageLink(
                  "/assets-images/faculty-images/director-sir.jpg"
                )}
                alt="Director Mr. Suhail Ahmed Khan"
                className="w-full h-64 md:h-80 lg:object-right object-contain group-hover:brightness-110 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
            <div className="w-full md:w-3/5 p-8 md:p-12">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-shade-blue-light bg-opacity-10 text-shade-blue-light rounded-full text-sm font-semibold mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-white bg-shade-blue-light rounded-full mr-2">
                  Go to Director Desk
                </span>
              </motion.div>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-shade-blue-light transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                A Message from Our Director
              </motion.h2>
              <motion.p
                className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                "Our aim is to create an institute that helps prepare kids not
                only for their school exams, but also for their future. We
                believe in transforming young minds into great citizens with
                social and environmental responsibility."
              </motion.p>
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Mr. Suhail Ahmed Khan
                  </h4>
                  <p className="text-shade-blue-light font-medium">
                    Hon'ble Director, IOS
                  </p>
                </div>
                <motion.div
                  className="flex items-center gap-0 text-shade-blue-light font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm"
                  whileHover={{ x: 4 }}
                >
                  <span onClick={handleDirectorClick} className="mr-2">
                    Read Full Message
                  </span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-shade-blue-light to-blue-600 opacity-5 rounded-bl-full"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DirectorCTA;
