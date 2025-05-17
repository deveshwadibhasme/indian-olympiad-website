import React, { useEffect, useState } from "react";
import TransportRoutes from "../data/transport-routes";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";

const TransportPage = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsLoading(false);
  }, []);

  const handleMouseEnter = (index, e) => {
    setcurrentIndex(index + 1);
    window.scrollTo({
      top: e.target.offsetTop - 100,
      behavior: "smooth",
    });
  };

  const handleIndexZero = (e) => {
    e.stopPropagation();
    if (currentIndex === 0) return;
    setcurrentIndex(0);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          onClick={handleIndexZero}
          className="w-full flex-center min-h-screen py-5 h-full flex-col relative mx-auto bg-gray-50"
        >
          <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="text-4xl md:text-6xl font-bold text-center my-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
                  >
                    <FontAwesomeIcon icon={faBus} className="text-amber-400 mr-3" />
                    Routes Wise Transport
                  </motion.h1>
          <p className="max-w-sm text-center mx-auto mt-4 text-gray-600 text-lg">
            ROUTEWISE TRANSPORT FACILITY : 2022-2023
            <span className="block text-sm text-gray-500 mt-2">(Click to Expand)</span>
          </p>
          <div className="overflow-x-auto w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto mt-10 p-4">
            {TransportRoutes.map((route, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className={`w-full transition-all duration-500 ease-in-out
                  ${index + 1 === currentIndex 
                    ? "h-full bg-white shadow-lg transform scale-102" 
                    : "h-32 bg-white/90 hover:bg-white hover:shadow-md"
                  } 
                  rounded-xl overflow-hidden`}
              >
                <div
                  onClick={(e) => handleMouseEnter(index, e)}
                  className={`p-4 cursor-pointer ${
                    index + 1 === currentIndex ? "bg-blue-50" : ""
                  }`}
                >
                  <div className="grid grid-cols-2 gap-2">
                    <p className="text-gray-700"><span className="font-medium">Driver:</span> {route.driverName}</p>
                    <p className="text-gray-700"><span className="font-medium">Contact:</span> {route.contactNo}</p>
                    <p className="text-gray-700"><span className="font-medium">Vehicle:</span> {route.vehicleNo}</p>
                    <p className="text-gray-700"><span className="font-medium">Route:</span> {`${route.stops[0].stop} - ${
                      route.stops[route.stops.length - 1].stop
                    }`}</p>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <table className="w-full mt-6 text-left border-collapse bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border-b px-4 py-3 text-sm font-medium text-gray-500">Sr.</th>
                        <th className="border-b px-4 py-3 text-sm font-medium text-gray-500">Pickup / Drop Point</th>
                        <th className="border-b px-4 py-3 text-sm font-medium text-gray-500">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {route.stops.map((stop, stopIndex) => (
                        <tr key={stopIndex} className="hover:bg-gray-50">
                          <td className="border-b px-4 py-3 text-sm text-gray-600">{stopIndex + 1}</td>
                          <td className="border-b px-4 py-3 text-sm text-gray-600">{stop.stop}</td>
                          <td className="border-b px-4 py-3 text-sm text-gray-600">{stop.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      }
    </AnimatePresence>
  );
};

export default TransportPage;
