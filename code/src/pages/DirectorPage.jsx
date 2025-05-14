// DirectorPage.jsx
import React, { useEffect } from "react";
import getImageLink from "../utils/getImage";
import { motion } from "framer-motion";

const DirectorPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const variants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.8,
                staggerChildren: 0.3 
            } 
        },
    };

    return (
        <motion.section
            className="relative min-h-screen py-5 bg-gradient-to-b from-white to-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                className="container mx-auto px-4 max-w-7xl"
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <motion.div 
                        className="w-full md:w-3/5"
                        variants={variants}
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-shade-blue-light mb-8 relative"
                            variants={variants}
                        >
                            Welcome Message from the Hon'able Director
                            <div className="h-1 w-24 bg-shade-blue-light mt-4"></div>
                        </motion.h1>
                        <motion.p
                            className="text-lg text-gray-700 leading-relaxed space-y-4"
                            variants={variants}
                        >
                           On behalf of the IOS family, we welcome you all to IOS, IOS is top cbse school in nagpur a place dedicated to the pursuit of knowledge and excellence, a place where we transform young and beautiful minds into great citizens of this nation with a sense of social and environmental responsibility. The inception of IOS was a result of difficulties faced by us during the education periods of our kids. In today’s cut throat competition being a master of one trade is not good enough anymore. We had learn this the hard way. Even after being in the education field ourselves, we were unaware of the changes in the education system and the rise in competition that comes with it. Our aim for starting IOS was to create an institute that helps prepare kids not only for their school exams, but also for their future; to bring out the best possible in each kid and to provide an institute to the parents that they can believe in and entust their child with. We at IOS teach the kids the methods of earning that help them to not only master the course being taught in the school syllabus but also teach themselves beyond that. We understand that each child is unique and special and so the curriculum is very flexible to adjust to each child’s needs and pace. For the students, we are sure that the excellent academic opportunities and the chance to participate in the extra-curricular and sports activities coupled with the exposure to the professional world provided by the guest lecture and talks by the eminent personalities will help you to shape yourselves into individuals who you can be proud of and as of parents, We can assure you that once your child enters the school, he/she is completely our responsibility and we will bring out the best in your child.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-2/5"
                        variants={variants}
                    >
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                            <img
                                loading="lazy"
                                src={getImageLink("/assets-images/faculty-images/director-sir.jpg")}
                                alt="Director Mr. Suhail Ahmed Khan"
                                className="w-full h-[800px] object-cover transform hover:scale-105 transition-transform duration-300"
                                style={{
                                    filter: "contrast(1.2) brightness(1.1)",
                                }}
                            />
                        </div>
                        <h4 className="text-2xl font-bold text-center mt-4 text-shade-blue-light">
                            Hon'ble Director
                            <span className="block text-xl text-gray-700 mt-1">
                                Mr. Suhail Ahmed Khan
                            </span>
                        </h4>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default DirectorPage;
