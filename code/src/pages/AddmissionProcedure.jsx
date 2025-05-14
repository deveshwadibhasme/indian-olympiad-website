import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // You'll need to install framer-motion

const AddmissionProcedure = () => {
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
        <h1 className="text-3xl md:text-4xl relative mb-8 text-shade-blue-light text-center font-bold">
          Admission Procedure
          <div className="h-1 w-32 bg-blue-600 mx-auto mt-2 rounded-full"></div>
        </h1>

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

        <Link 
          to="/fee-structure"
          className="block text-center mt-8 text-2xl text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          View Fee Structure →
        </Link>
      </motion.div>
    </section>
  );
};

export default AddmissionProcedure;
