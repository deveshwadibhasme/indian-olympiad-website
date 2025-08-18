import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // You'll need to install framer-motion
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenClip, faUserGraduate } from "@fortawesome/free-solid-svg-icons";

const AddmissionProcedure = () => {
  useEffect(() => {
    document.title = "Admission Guidelines - Indian Olympiad School";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about the admission guidelines, required documents, and procedures for enrolling at Indian Olympiad School."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Learn about the admission guidelines, required documents, and procedures for enrolling at Indian Olympiad School.";
      document.head.appendChild(meta);
    }
  }, []);

   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const requiredDocuments = [
    "Original Transfer Certificate (From Class II Onwards)",
    "Caste Certificate (If Applicable)",
    "Original Birth Certificate (Upto Class I)",
    "Original Migration Certificate (XI)",
    "Aadhar Card (Optional)",
    "Report Card (Required)",
    "Latest Photographs (Name mentioned backside)",
    "Bonafide Certificate (Required)",
  ];

  return (
    <section className="w-full flex-center min-h-screen h-full flex-col relative mx-auto bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-xl w-full mx-auto mt-5 p-6 bg-white shadow-xl rounded-lg"
      >
        <motion.h1
                 initial={{ opacity: 0, y: -50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, type: "spring" }}
                 className="text-5xl md:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
               >
                 {/* <FontAwesomeIcon icon={faPenClip} className="text-amber-400 invisible" /> */}
                  Admission Procedure
               </motion.h1>

        <div className="flex flex-col gap-6 mt-8">
          {/* Sections with hover effects and better spacing */}
          <div className="transition-all hover:shadow-lg p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Procurement of Prospectus & Admission Form
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Procure the prospectus from the school office on any working day between 8.00 am and 2.00 pm. 
              It can either be collected personally or a proxy can be deputed to collect the same on your behalf. 
              The set of forms (in the prospectus) need to be submitted with necessary documents for registration. 
              On submission of the registration form to the front desk of the school, necessary information shall be intimated to you.
            </p>
          </div>

          <div className="transition-all hover:shadow-lg p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Documents Required at Admission Time
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {requiredDocuments.map((doc, index) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  key={index}
                  className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-sm"
                >
                  {doc}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="transition-all hover:shadow-lg p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Procedure for the Admission
            </h3>
            <div className="space-y-4">
              {[
                "Student have to attend a written test for the respective class (seeking for admission).",
                "After passing written test, ward is invited to a Oral test with director.",
                "After written and oral test admission form is accepted, along with the first Instalment of school fee & Registration Charges."
              ].map((step, index) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  key={index}
                  className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-sm flex items-center"
                >
                  <span className="mr-4 bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <Link 
            to="/fee-structure"
            className="block text-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            View Fee Structure
          </Link>
          <Link 
            to="/online-registration"
            className="block text-center px-6 py-3 bg-green-600 text-white rounded-full text-lg font-medium hover:bg-green-700 transition-colors duration-300 shadow-lg"
          >
            Online Registration
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default AddmissionProcedure;
