import React, { useEffect, useState } from "react";
import { alumniData } from "../data/achievers-details.js";
import { motion } from "framer-motion";
import getImageLink from "../utils/getImage.js";

const TopAlumni = () => {
  const [selectedBatch, setSelectedBatch] = useState("All");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const batches = [
    "All",
    ...new Set(alumniData.map((item) => item.batch).filter(Boolean)),
  ];

  const filteredAlumni = alumniData.filter((person) => {
    const matchesBatch =
      selectedBatch === "All" || person.batch === selectedBatch;
    return matchesBatch;
  });

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-4xl lg:text-6xl font-bold text-center md:mt-10 xl:mt-0 mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 "
        >
          {/* <FontAwesomeIcon icon={faTrophy} className="text-amber-400 invisible" /> */}
          Our Alumni
        </motion.h1>

        <motion.div
          className="flex flex-col max-w-md mx-auto items-center mb-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="w-full py-3 px-4 text-lg rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
          >
            <option value="All">All Batches</option>
            {batches
              .filter((b) => b !== "All")
              .map((batch) => (
                <option key={batch} value={batch}>
                  Batch {batch}
                </option>
              ))}
          </select>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAlumni.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.7, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-3 md:p-5 flex flex-col items-center text-center border-b-2 border-t-2 w-[80%] md:w-full mx-auto
              border-violet-500"
            >
              <div className="w-30 h-30 bg-blue-500 rounded-xl mb-2 md:mb-1 flex items-center justify-center overflow-hidden border-2 border-blue-100">
                {person.image ? (
                  <img
                    src={getImageLink(person.image)}
                    alt={person.name}
                    className="w-full h-full object-cover  text-blue-500"
                  />
                ) : (
                  <span className="text-2xl font-bold text-blue-300">
                    {person.name.charAt(0)}
                  </span>
                )}
              </div>

              <div className="mt-2 md:mt-2">
                <h2 className="text-lg font-bold text-gray-800 leading-tight">
                  {person.name}
                </h2>
                {person.organization && (
                  <p className="mt-2 text-xs py-1 px-1 md:px-3 bg-blue-200 rounded-2xl text-gray-600 font-medium italic line-clamp-1">
                    {person.organization}
                  </p>
                )}
                <span className="text-[10px] md:text-xs font-medium text-blue-500">
                  {person.startYear || "?"} - {person.endYear || "Present"}
                </span>
              </div>

              {person.role && (
                <p className="text-xs md:text-sm text-blue-900 font-bold line-clamp-2 min-h-[1.2rem] md:min-h-[1.5rem]">
                  {person.role}
                </p>
              )}

              <div className="mt-auto pt-2 md:pt-4">
                {person.type && (
                  <span
                    className={`text-[8px] md:text-[10px] px-2 md:px-3 py-0.5 md:py-1 rounded-full font-bold uppercase tracking-wider ${
                      person.type === "Job"
                        ? "bg-green-100 text-green-700"
                        : person.type === "Business"
                        ? "bg-purple-100 text-purple-700"
                        : person.type === "Course"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {person.type}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAlumni;
