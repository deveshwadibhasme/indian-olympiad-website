import React from "react";
import { motion } from "framer-motion";
import welcomeImage from "../assets/ios-welcome.jpg";

const WelcomePage = () => {
    return (
        <div className="w-full min-h-120 flex items-center justify-center bg-white pt-5">
            <motion.div
                className="max-w-screen text-center w-full mt-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-3xl md:text-4xl font-semibold text-amber-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Welcome to Indian Olympiad School!
                </motion.h1>
                <motion.h3
                    className="text-blue-700 text-4xl relative hori-strip after:top-33 md:text-5xl max-w-screen-md mx-auto font-semibold md:font-bold"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    An Outstanding Curriculum and CBSE School in Nagpur.
                </motion.h3>
                <motion.p
                    className="mt-8 max-w-280 w-full mx-auto text-gray-700 text-lg md:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    Indian Olympiad School is a truly ground-breaking
                    learning environment that provides exceptionally high standards of
                    education to all the students. The school, spanning an area of eight
                    acres, offers a spectrum of facilities and resources that combines a
                    world class education with distinctive, state-of-the-art
                    infrastructure.
                </motion.p>
                <motion.img
                    src={welcomeImage}
                    alt="Indian Olympiad School Welcome"
                    className="mx-auto mt-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />
            </motion.div>
        </div>
    );
};

export default WelcomePage;
