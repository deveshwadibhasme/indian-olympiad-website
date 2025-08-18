import { useEffect } from "react";
import { motion } from "framer-motion";
import getImageLink from "../utils/getImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRegistered,
  faUserTimes,
} from "@fortawesome/free-solid-svg-icons";

const LabsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const labData = [
    {
      title: "Physics Lab",
      description:
        "Our physics lab provides a dynamic environment for students to explore fundamental principles of physics through hands-on experiments and interactive demonstrations.",
      images: [
        "/assets-images/labphysics11.jpg",
        "/assets-images/labphysics12.jpg",
      ],
    },
    {
      title: "Computer Lab",
      description:
        "Our computer lab is equipped with the latest technology and software to provide students with hands-on experience in programming, web development, and data analysis.",
      images: [
        "/assets-images/labpageimg10.jpg",
        "/assets-images/labpageimg10.jpg",
      ],
    },
    {
      title: "Chemistry Lab",
      description:
        "The chemistry lab is designed for experiments and practical learning in chemistry. Students can conduct experiments safely under the guidance of qualified instructors.",
      images: [
        "/assets-images/labpageimg8.jpg",
        "/assets-images/labpageimg7.jpg",
      ],
    },
    {
      title: "Biology Lab",
      description:
        "Our biology lab is equipped with microscopes and other instruments for students to explore the world of living organisms and conduct experiments in biology.",
      images: [
        "/assets-images/labpageimg5.jpg",
        "/assets-images/labpageimg4.jpg",
      ],
    },
  ];

  return (
    <section className="relative text-center w-full min-h-screen bg-gradient-to-b from-slate-50 to-white py-5">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="text-5xl md:text-6xl font-bold text-center my-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
      >
        {/* <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-amber-400 invisible"
        /> */}
        IOS Labs
      </motion.h1>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-12">
          {labData.map((lab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold mb-6 text-shade-blue-dark">
                {lab.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {lab.description}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {lab.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      loading="lazy"
                      src={getImageLink(image)}
                      alt={`${lab.title} - Image ${imageIndex + 1}`}
                      className="w-full h-96 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabsPage;
