import React, { useEffect } from "react";
import aboutUsData from "../data/about-us";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  // Get appropriate icon based on index or title
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case "academics":
        return faGraduationCap;
      case "faculty":
        return faChalkboardTeacher;
      case "library":
        return faBookOpen;
      case "sports":
        return faFutbol;
      case "transport":
        return faBus;
      case "art":
        return faPalette;
      case "auditorium":
        return faTheaterMasks;
      case "medical":
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
      <div className="max-w-screen-xl mx-auto px-4 text-center mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Looking for the best CBSE school in Nagpur? Your search ends here at Indian Olympiad Senior Secondary School. We are proud to be recognized as one of the top CBSE schools in Nagpur, providing quality education and fostering holistic development.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Founded by <strong className="text-indigo-600">Mr. Suhail Ahmed Khan</strong> and <strong className="text-indigo-600">Mrs. Nagma Khan</strong>, IOS aims to provide an academic base to the student that will help them not only achieve excellence in their school life, but also help them attain better result in their higher academic studies, to help them achieve their full potential at various extra-curricular activities and to mould them into responsible citizens and good human beings.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          We encourage the students to set their own limits and then encourage them to go beyond the same, thus engraving in their minds the reality that the limitations we have are just an illusion created by ourselves that restrict us from achieving far greater heights of success.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          We have created a very <strong className="text-indigo-600">flexible curriculum</strong> that adapts itself according to each individual student, helps them to learn at their own pace and stress on the quality of studies.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Apart from their academics, IOS inculcates values in the student that help them to grow up into people with a <strong className="text-indigo-600">strong character</strong>. In short, the students at IOS are trained to achieve the targets with their smart as well as hard work and to strive to be leaders in their respective fields who have the ability to bring a revolution in the society with their knowledge, hard work and human values.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mt-10 max-w-screen mx-auto">
        <h2 className="text-[28px] md:text-4xl font-bold text-center mb-8 col-span-full text-indigo-600">
          What's Special About Us!
        </h2>

        {aboutUsData.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            key={index}
            className="bg-white max-w-md w-full shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="text-shade-blue-light text-2xl mb-4 flex justify-center">
              <FontAwesomeIcon icon={getIcon(item.icon)} />
            </div>
            <h2 className="text-lg font-semibold text-shade-blue-light mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
