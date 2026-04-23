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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredAlumni.map((person, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="group relative text-center rounded-xl flex flex-col items-center h-80 justify-center overflow-hidden cursor-pointer transition-all duration-300 ease-in-out transform hover:shadow-2xl perspective-normal bg-transparent"
            >
              <div className="relative w-full backface-hidden group-hover:-rotate-y-180 transform-3d transition-transform duration-500 origin-center h-full rotate-y-0 ease-in-out">
                {person.image ? (
                  <img
                    src={getImageLink(person.image)}
                    onError={(e) => {
                      e.target.src = getImageLink(
                        "/assets-images/faculty-images/profile-icon.jpg"
                      );
                    }}
                    alt={person.name}
                    className="w-full absolute h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full absolute h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center rounded-xl">
                    <img
                      src={getImageLink(
                        "/assets-images/faculty-images/profile-icon.jpg"
                      )}
                      alt={person.name}
                      className="w-full absolute h-full object-cover rounded-xl"
                    />
                  </div>
                )}
                <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-blue-950 to-transparent p-4">
                  <h2 className="text-xl font-bold text-white">
                    {person.name}
                  </h2>
                </div>
              </div>

              <motion.div className="absolute bg-white rounded-xl shadow-2xl inset-0 flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180 group-hover:-rotate-y-0 transform-3d transition-transform duration-500 origin-center">
                <p className="text-gray-800 text-lg font-bold mb-1">
                  {person.role || "Alumni"}
                </p>
                <p className="text-indigo-600 font-semibold text-sm mb-2">
                  {person.organization}
                </p>
                <p className="text-gray-500 text-sm mb-3">
                  Batch {person.batch} ({person.startYear || "?"} -{" "}
                  {person.endYear || "Present"})
                </p>
                {person.type && (
                  <span
                    className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider ${
                      person.type === "Job"
                        ? "bg-green-100 text-green-700"
                        : person.type === "Business"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {person.type}
                  </span>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAlumni;
