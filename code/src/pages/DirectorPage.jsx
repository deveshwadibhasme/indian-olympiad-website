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

    const imageVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }, 
    };

    const headingVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <motion.section
            className="relative flex w-full max-w-screen min-h-screen flex-col justify-center mx-auto mb-10 h-full "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
            <div className="flex w-full flex-col-reverse md:flex-row max-w-screeen-xl mx-auto px-3">
                <motion.div
                    className="w-full flex flex-col gap-y-10 max-w-screen-sm mx-auto"
                >
                    <motion.h1
                        className="relative text-3xl font-semibold text-shade-blue-light hori-strip md:text-6xl w-full md:mt-2 after:top-20 after:left-15 md:after:top-50 md:after:left-20 after:w-40"
                        variants={headingVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                        Welcome Message from the Hon'able Director
                    </motion.h1>
                    <motion.p
                        className="w-full text-center md:text-left"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                        On behalf of the IOS family, we welcome you all to IOS, IOS is top
                        cbse school in nagpur a place dedicated to the pursuit of knowledge
                        and excellence, a place where we transform young and beautiful minds
                        into great citizens of this nation with a sense of social and
                        environmental responsibility. The inception of IOS was a result of
                        difficulties faced by us during the education periods of our kids.
                        In today’s cut throat competition being a master of one trade is not
                        good enough anymore. We had learn this the hard way. Even after
                        being in the education field ourselves, we were unaware of the
                        changes in the education system and the rise in competition that
                        comes with it. Our aim for starting IOS was to create an institute
                        that helps prepare kids not only for their school exams, but also
                        for their future; to bring out the best possible in each kid and to
                        provide an institute to the parents that they can believe in and
                        entust their child with. We at IOS teach the kids the methods of
                        earning that help them to not only master the course being taught in
                        the school syllabus but also teach themselves beyond that. We
                        understand that each child is unique and special and so the
                        curriculum is very flexible to adjust to each child’s needs and
                        pace. For the students, we are sure that the excellent academic
                        opportunities and the chance to participate in the extra-curricular
                        and sports activities coupled with the exposure to the professional
                        world provided by the guest lecture and talks by the eminent
                        personalities will help you to shape yourselves into individuals who
                        you can be proud of and as of parents, We can assure you that once
                        your child enters the school, he/she is completely our
                        responsibility and we will bring out the best in your child.
                    </motion.p>
                </motion.div>
                <motion.div
                    className="w-full max-w-xl"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img
                        loading="lazy"
                        style={{
                            filter: "contrast(1.4) brightness(1.2) grayscale(0.3)",
                        }}
                        src={getImageLink("/assets-images/faculty-images/director-sir.jpg")}
                        alt="Director....."
                        className="h-140 md:h-200 max-w-lg object-cover w-full "
                    />
                    <h4 className="text-center text-xl m-1 font-bold">
                        Hon'ble Director Mr. Suhail Ahmed khan
                    </h4>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default DirectorPage;
