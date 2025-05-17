import React, { useEffect } from "react";
import { useState } from "react";
import ContactLayout from "../layouts/ContactLayout";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [dirChange, setdirChange] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <motion.div 
      className="w-full flex-center flex-col relative mx-auto bg-slate-50"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="max-w-full rounded-xl bg-white w-full min-h-[550px] shadow-sm shadow-slate-500 mx-auto px-6 pb-9 flex items-center flex-col"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
      <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-5xl md:text-6xl font-bold text-center my-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          <FontAwesomeIcon icon={faContactCard} className="text-amber-400 mr-3" />
          Contact Us
        </motion.h1>
        <motion.div
          onClick={() => setdirChange(!dirChange)}
          className={`w-96 min-h-14 mt-10 flex relative bg-slate-200 rounded-xl ${
            !dirChange ? "active-left" : "active-right"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.button
            className={`flex-center z-10 relative w-[50%] text-xl font-semibold rouded-xl ${
              !dirChange ? "text-white" : "text-black"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Bhilgaon
          </motion.button>
          <motion.button
            className={`flex-center z-10 relative w-[50%] text-xl font-semibold rouded-xl ${
              !dirChange ? "text-black" : "text-white"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Prashant Nagar
          </motion.button>
        </motion.div>
        <hr />
        <motion.div 
          className="flex flex-col mt-5 items-center w-full gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ContactLayout tabChange={dirChange} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
