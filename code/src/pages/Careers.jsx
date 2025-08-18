import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const Careers = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    document.title = "Careers - Indian Olympiad School";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Join Indian Olympiad School and make a difference. Explore career opportunities and recruitment procedures."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Join Indian Olympiad School and make a difference. Explore career opportunities and recruitment procedures.";
      document.head.appendChild(meta);
    }
  }, []);

  const skills = [
    "Critical Thinking",
    "Patience",
    "Communication",
    "Imaginative Thinking",
    "Leadership",
    "Teamwork",
    "Conflict Resolution",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="w-full flex-center min-h-screen h-full flex-col relative mx-auto bg-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mt-4 mx-auto px-4">
        <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, type: "spring" }}
                 className="text-4xl md:text-6xl font-bold text-center mb-6 w-full text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
               >
                 {/* <FontAwesomeIcon icon={faUserGraduate} className="text-amber-400 invisible" /> */}
                 Careers in Indian Olympiad School
               </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative text-center rounded-lg flex flex-col items-center justify-center p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
              variants={itemVariants}
              whileHover="hover"
            >
              <h2 className="text-xl font-semibold text-gray-800">{skill}</h2>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-15 mb-5">
          <motion.h2
            className="text-3xl md:text-6xl text-blue-600 text-center font-semibold mb-4 mt-10"
            variants={headingVariants}
          >
            Recruitment Procedure
          </motion.h2>
          <ol className="list-none text-xl pl-6 text-center md:pl-10 mt-10 mb-10">
            <motion.li
              className="mb-10 max-w-2xl rounded-2xl mx-auto bg-white p-1 relative"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              CV/Resume/Testimonial review and selection for Live Class Demo.
              <br /> <span>&#8595;</span>
            </motion.li>
            <motion.li
              className="mb-10 max-w-2xl rounded-2xl mx-auto bg-white p-1 relative"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Administrative call for Demonstration date. <br />
              <span>&#8595;</span>
            </motion.li>
            <motion.li
              className="mb-10 max-w-2xl rounded-2xl mx-auto bg-white p-1 relative"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Recruitment team reviews Demonstration remarks. <br />
              <span>&#8595;</span>
            </motion.li>
            <motion.li
              className="mb-10 max-w-2xl rounded-2xl mx-auto bg-white p-1 relative"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Interview with Panel of Directors and recruitment team. <br />
              <span>&#8595;</span>
            </motion.li>
            <motion.li
              className="mb-10 max-w-2xl rounded-2xl mx-auto bg-white p-1"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Appointment letter issuance.
            </motion.li>
          </ol>
          <div className="mt-8 text-center">
            <p className="text-lg">
              For recruitment/career opportunities at Indian Olympiad School,
              please check our advertisements in the newspaper or school
              website.
            </p>
            <p className="text-lg">
              You can also send your CV/Resume to our email ID:
              <a
                href="mailto:indianolympiadschool@gmail.com"
                className="text-blue-500"
              >
                indianolympiadschool@gmail.com
              </a>
            </p>
            <p className="text-lg">
              Or visit our admin branch at:
              <span className="font-medium">
                61/1, Ranala Bhilgaon Raod, Bhilgaon, Nagpur 440026
              </span>
            </p>
            <p className="text-lg">
              Or call us at: <span className="font-medium">9923647869</span>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Careers;
