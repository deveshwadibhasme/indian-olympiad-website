import React, { useEffect } from "react";
import aboutUsData from "../data/about-us";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faChalkboardTeacher, 
  faBookOpen, 
  faFutbol, 
  faSchool, 
  faBus,
  faPalette,
  faTheaterMasks,
  faMedkit
} from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  // Get appropriate icon based on index or title
  const getIcon = (title) => {
    switch(title.toLowerCase()) {
      case 'academics':
        return faGraduationCap;
      case 'faculty':
        return faChalkboardTeacher;
      case 'library':
        return faBookOpen;
      case 'sports':
        return faFutbol;
      case 'transport':
        return faBus;
      case 'art':
        return faPalette;
      case 'auditorium':
        return faTheaterMasks;
      case 'medical':
        return faMedkit;
      default:
        return faSchool;
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="w-full flex-center min-h-screen h-full py-5 flex-col relative mx-auto bg-slate-50">
     <h1 className="text-3xl md:text-4xl relative mb-2 text-shade-blue-light text-center font-bold">
          About Us (IOS)
          <div className="h-1 w-32 bg-blue-600 mx-auto mt-2 rounded-full"></div>
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-10 max-w-screen-xl mx-auto">
        {aboutUsData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="bg-white max-w-sm w-full shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105"
          >
            <div className="text-shade-blue-light text-3xl mb-4 flex justify-center">
              <FontAwesomeIcon icon={getIcon(item.icon)} />
            </div>
            <h2 className="text-xl font-semibold text-shade-blue-light mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
