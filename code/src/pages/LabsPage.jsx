import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { getImageLink } from "../utils/getimage";

const LabsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const labData = [
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
    <section className="relative flex w-full min-h-screen flex-col items-center justify-center mx-auto mb-10 h-full bg-slate-50">
      <h1 className="relative text-3xl text-center font-bold text-shade-blue-light hori-strip md:text-heading md:mt-2 after:top-10 md:after:top-17">
        School Labs
      </h1>
      <div className="max-w-screen-xl mx-auto mt-5 p-2">
        <div className="flex flex-col text-center">
          {labData.map((lab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-semibold mb-4">{lab.title}</h2>
              <p>{lab.description}</p>
              <div className="mt-4 flex flex-col md:flex-row gap-5">
                {lab.images.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    loading="lazy"
                    src={getImageLink(image)}
                    alt={lab.title}
                    className="mx-auto max-w-sm object-cover w-full min-h-80 bg-emerald-200 rounded-lg shadow-lg"
                  />
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
