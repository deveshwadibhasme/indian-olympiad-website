import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faVenusMars, faCakeCandles, faBuilding, faEnvelope, faPhone, faSchool, faIdCard, faBook } from '@fortawesome/free-solid-svg-icons';

const RegistrationForm = () => {

  useEffect(() => {
    document.title = "Registration Form - Indian Olympiad School";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Register your child for admission at Indian Olympiad School. Fill out our online registration form with student and parent details."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Register your child for admission at Indian Olympiad School. Fill out our online registration form with student and parent details.";
      document.head.appendChild(meta);
    }
  }, []);

   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        alert("This Form is being inactive for some period of time.");
        e.target.reset();
    }


  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex items-center justify-center flex-col">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-4xl mt-10 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-8">
              <FontAwesomeIcon icon={faBook} className="mr-2 text-yellow-500" />Student Registration
        </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg max-w-screen-xl mx-auto shadow-xl w-full">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student's Name */}
            <div className="relative mb-4">
              <label htmlFor="studentName" className="block text-gray-700 font-medium mb-2">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-500" />
                Student's Name
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter student's full name"
                required
              />
            </div>

            {/* Father's Name */}
            <div className="relative mb-4">
              <label htmlFor="fatherName" className="block text-gray-700 font-medium mb-2">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-500" />
                Father's Name
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter father's full name"
                required
              />
            </div>

            {/* Mother's Name */}
            <div className="relative mb-4">
              <label htmlFor="motherName" className="block text-gray-700 font-medium mb-2">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-500" />
                Mother's Name
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter mother's full name"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="relative mb-4">
              <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">
                <FontAwesomeIcon icon={faCakeCandles} className="mr-2 text-blue-500" />
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Gender */}
            <div className="relative mb-4">
              <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
                <FontAwesomeIcon icon={faVenusMars} className="mr-2 text-blue-500" />
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Select Branch */}
            <div className="relative mb-4">
              <label htmlFor="branch" className="block text-gray-700 font-medium mb-2">
                <FontAwesomeIcon icon={faBuilding} className="mr-2 text-blue-500" />
                Select Branch
              </label>
              <select
                id="branch"
                name="branch"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Branch</option>
                <option value="Bhilgaon">Bhilgaon</option>
                <option value="Prashant nagar">Prashant Nagar</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div className="relative mb-4">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              <FontAwesomeIcon icon={faIdCard} className="mr-2 text-blue-500" />
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="4"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full address"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Number */}
            <div className="relative mb-4">
              <label htmlFor="contactNumber" className="block text-gray-700 font-medium mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-500" />
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter contact number"
                required
              />
            </div>

            {/* Email Address */}
            <div className="relative mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email address"
                required
              />
            </div>
          </div>

          {/* Previous School */}
          <div className="relative mb-4">
            <label htmlFor="previousSchool" className="block text-gray-700 font-medium mb-2">
              <FontAwesomeIcon icon={faSchool} className="mr-2 text-blue-500" />
              Previous School (if any)
            </label>
            <input
              type="text"
              id="previousSchool"
              name="previousSchool"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter previous school name"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg"
            >
              Register
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;