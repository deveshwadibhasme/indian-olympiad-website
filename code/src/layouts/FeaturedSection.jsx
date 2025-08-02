import React from 'react';
import { motion } from 'framer-motion';
import bffYtImage from '../assets/bff-yt.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const FeaturedSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#003366] mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Video
        </motion.h2>
        <motion.div
          className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="https://youtu.be/ouHDTEls8MM?si=aD7zMDTKALx4AKK4"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src={bffYtImage}
              alt="YouTube Video Thumbnail"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-75">
                <FontAwesomeIcon icon={faPlayCircle} className="text-white text-7xl" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
