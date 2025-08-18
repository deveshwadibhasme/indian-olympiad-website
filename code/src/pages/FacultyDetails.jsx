import React, { useEffect } from "react";
import facultyDetails from "../data/faculty-details.js";
import { motion } from "framer-motion";
import getImageLink from "../utils/getImage.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const FacultyDetails = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleClick = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    const facultyNo = e.target.getAttribute("faculty-no");
    if (parseInt(facultyNo) === index) {
      e.target.parentElement.classList.toggle("rotate-y-180");
      e.target.parentElement.nextElementSibling.classList.toggle("rotate-y-180");
      e.target.parentElement.nextElementSibling.classList.toggle("-rotate-y-0");
    }
    if (facultyNo === index + "-back") {
      e.target.classList.toggle("rotate-y-180");
      e.target.previousElementSibling.classList.toggle("rotate-y-180");
      e.target.previousElementSibling.classList.toggle("-rotate-y-0");
    }
  };

  return (
    <section className="w-full flex-center min-h-screen h-full flex-col relative mx-auto bg-gradient-to-b from-gray-50 to-gray-200">
       <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className="text-5xl md:text-6xl font-bold text-center my-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
              >
                {/* <FontAwesomeIcon icon={faPeopleGroup} className="text-amber-400 invisible" /> */}
                Our Faculty
              </motion.h1>
        <small className="text-center block text-sm text-gray-600 mt-4 font-medium">
          Click or hover to learn more about our faculty members
        </small>
      
      <div className="max-w-screen-xl w-full mx-auto mt-12 p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 min-h-screen">
          {facultyDetails.map((faculty, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="group relative text-center rounded-xl flex flex-col items-center h-80 justify-center overflow-hidden cursor-pointer transition-all duration-300 ease-in-out transform hover:shadow-2xl perspective-normal bg-transparent"
            >
              <div
                onClick={(e) => handleClick(index, e)}
                faculty-no={index}
                className="relative w-full backface-hidden group-hover:-rotate-y-180 transform-3d transition-transform duration-500 origin-center h-full rotate-y-0 ease-in-out"
              >
                <img
                  src={getImageLink(faculty.image)}
                  alt={faculty.name}
                  faculty-no={index}
                  className="w-full absolute h-full object-cover rounded-xl"
                />
                <div 
                  faculty-no={index}
                  className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-blue-950 to-transparent p-4"
                >
                  <h2 className="text-xl font-bold text-white">
                    {faculty.name}
                  </h2>
                </div>
              </div>
              <motion.div 
                faculty-no={index + '-back'}
                onClick={(e) => handleClick(index, e)}
                className="absolute bg-white rounded-xl shadow-2xl inset-0 flex flex-col items-center justify-center p-6 backface-hidden rotate-y-180 group-hover:-rotate-y-0 transform-3d transition-transform duration-500 origin-center"
              >
                <p className="text-gray-800 text-xl font-semibold mb-2">{faculty.designation}</p>
                <p className="text-gray-600 mb-2">{faculty.qualification}</p>
                <p className="text-gray-600 text-sm">{faculty.experience}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyDetails;
