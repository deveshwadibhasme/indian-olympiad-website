import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const schoolQA = [
    {
      que: "What curriculum will the school follow?",
      ans: "We are affiliated to CBSE curriculum.",
    },
    {
      que: "What is the fee structure?",
      ans: "Please call the school for fee details (Contact No. 9923647869)",
    },
    {
      que: "How can the school be located / How can we reach the school?",
      ans: `1. Kindly follow the given link for Google Map / Map Location.
            2. Indora Square (Jaswant Tuli Mall) → Automotive Square (Maruti Suzuki Showroom & Service Station) → Octrio Post No.2 (Naka No.2) → Bhilgaon Gate (Yashodhara Lawns) → Gangwani Garden → Indian Olympiad School.`,
    },
    {
      que: "What will be the school timings?",
      ans: "School timings:\n- Grade nursery to Kindergarten: 10:00 am to 12:30 pm\n- Grade I & II: 8:00 am to 12:30 pm\n- Grade III to XII: 8:00 am to 2:30 pm\n- Administration office: 8:00 am to 3:00 pm",
    },
    {
      que: "What is the admission procedure?",
      ans: "For those seeking admissions, a formal interaction and a written test will be conducted in which pupil and both the parents have to be present. The final decision of the admission committee will be binding.",
    },
    {
      que: "Will the school authorities be taking adequate measures to ensure hygiene in the school?",
      ans: "We maintains a high standard of cleanliness and hygiene. There are regular checks and monitoring by the school administration as well as periodic sanitization drives.",
    },
    {
      que: "What is the kind of security offered to the students?",
      ans: "The school has installed 136 CCTV cameras in the complete campus including the classrooms. Students are always accompanied by teachers or the class monitors when they are moving from one block to the other.",
    },
    {
      que: "How often will there be PTMs?",
      ans: "After each term assessment.",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <section className="w-full flex-center min-h-screen py-5 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl w-full mx-auto">
      <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-3xl md:text-6xl font-bold text-center my-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          <FontAwesomeIcon icon={faQuestionCircle} className="text-amber-400 mr-3" />
          Frequenlty Asked Questions
        </motion.h1>

        <div className="space-y-4">
          {schoolQA.map((qa, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                className="w-full text-left p-5 focus:outline-none"
                onClick={() =>
                  setActiveIndex(index === activeIndex ? null : index)
                }
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 pr-8">
                    {qa.que}
                  </h2>
                  <span
                    className={`text-2xl transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faChevronCircleDown}
                      className="text-shade-blue-light"
                    />
                  </span>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-gray-600 whitespace-pre-line">
                  {qa.ans}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
