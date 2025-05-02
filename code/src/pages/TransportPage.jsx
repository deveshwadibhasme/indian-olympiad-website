import React, { useEffect, useState } from "react";
import TransportRoutes from "../data/transport-routes";
import { motion } from "framer-motion";

const TransportPage = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      onClick={handleIndexZero}
      className="w-full flex-center min-h-screen mb-10 h-full mt-2 md:mt-14 flex-col relative mx-auto"
    >
      <h1 className="text-2xl md:mt-5 md:text-5xl relative hori-strip after:top-10 md:after:top-14 text-blue-600 text-center font-bold">
        Route Wise Transport
      </h1>
      <p className="max-w-screen-lg text-center mx-auto mt-4">
        ROUTEWISE TRANSPORT FACILITY : 2022-2023 (Click to Expand)
      </p>
      <div className="overflow-x-auto w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 justify-start items-start  gap-1.5 mx-auto mt-10 place-items-center">
        {TransportRoutes.map((route, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className={`w-full ${
              index + 1 === currentIndex ? "h-full" : "h-28"
            } overflow-y-hidden transition-['height'] duration-500 max-w-screen-lg bg-white shadow-sm md:shadow-lg shadow-slate-500 rounded-lg p-2 m-2`}
          >
            <div
              onClick={(e) => handleMouseEnter(index, e)}
              className="text-center cursor-pointer"
            >
              <p>Driver Name : {route.driverName}</p>
              <p>Contact No : {route.contactNo} </p>
              <p>Vehicle No. ({route.vehicleNo})</p>
              <p>
                Routes : (
                {`${route.stops[0].stop} - ${
                  route.stops[route.stops.length - 1].stop
                }`}
                )
              </p>
            </div>
            <table className="w-full mt-10 text-center border-collapse">
              <thead>
                <tr>
                  <th className="border px-1 py-2">Sr. </th>
                  <th className="border px-7 py-2">Pickup / Drop Point</th>
                  <th className="border px-4 py-2">Time</th>
                </tr>
              </thead>
              <tbody>
                {route.stops.map((stop, stopIndex) => (
                  <tr key={stopIndex} className="border">
                    <td className="border px-1 py-2">{stopIndex + 1}</td>
                    <td className="border px-7 py-2">{stop.stop}</td>
                    <td className="border px-4 py-2">{stop.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TransportPage;
