import React, { useEffect } from "react";
import activityCalender from "../data/activity-calender";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTrophy } from "@fortawesome/free-solid-svg-icons";

const ActivityCalender = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const tableVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="w-full flex-center min-h-screen h-full  flex-col relative mx-auto bg-gray-100">
        <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, type: "spring" }}
                 className="text-5xl md:text-6xl font-bold text-center mb-16 my-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
               >
                 <FontAwesomeIcon icon={faCalendar} className="text-amber-400 mr-5" />
               Activity Calender
               </motion.h1>
      <div className="max-w-screen-xl w-full mx-auto mt-5 p-2">
        <motion.div
          className="overflow-x-auto w-full shadow-md rounded-lg"
          variants={tableVariants}
          initial="hidden"
          whileInView="visible"
        >
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                  MONTHS / NUMBER OF WORKING DAYS
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                  Specifics
                </th>
                <th scope="col" className="px-3 py-3 md:px-6 md:py-3">
                  Holidays
                </th>
              </tr>
            </thead>
            <tbody>
              {activityCalender.map((data, i) => (
                <motion.tr
                  key={i}
                  className="bg-white border-b "
                  variants={rowVariants}
                >
                  <td
                    scope="row"
                    className="px-3 py-4 md:px-6 flex flex-col md:py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <span>{data.month}</span>
                    <span className="flex flex-col">
                      {Array.isArray(data.workingDays)
                        ? data.workingDays?.map((dt, i) => {
                            return (
                              <span
                                key={i}
                                className="text-gray-500 text-sm md:text-base"
                              >
                                <>
                                  {dt} <br />
                                </>
                              </span>
                            );
                          })
                        : data.workingDays + " Days"}
                    </span>
                  </td>
                  <td className="px-3 py-4 md:px-6 md:py-4">
                    {data?.specifics?.map((sp, i) => {
                      return (
                        <span
                          key={i}
                          className="text-gray-500 text-sm md:text-base"
                        >
                          {sp + ", "}
                          <br />
                          <br />
                        </span>
                      );
                    }) || " "}
                  </td>
                  <td className="px-3 py-4 md:px-6 md:py-4">
                    {data.holidays.join(", ") || " "}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivityCalender;
