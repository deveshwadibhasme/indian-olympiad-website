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
  faMedkit,
  faTrophy,
  faInfoCircle
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
    document.title = "About Us - Indian Olympiad School";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn more about Indian Olympiad School, our mission, vision, and the facilities we provide to ensure quality education."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Learn more about Indian Olympiad School, our mission, vision, and the facilities we provide to ensure quality education.";
      document.head.appendChild(meta);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="w-full flex items-center justify-center min-h-screen h-full py-5 flex-col relative mx-auto bg-slate-50">
     <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="text-5xl md:text-6xl font-bold text-center md:mt-10 xl:mt-0 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
            >
              {/* <FontAwesomeIcon icon={faInfoCircle} className="text-amber-400 invisible" /> */}
              About Us
            </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-10 max-w-screen mx-auto">
        {aboutUsData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="bg-white max-w-md w-full shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
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
