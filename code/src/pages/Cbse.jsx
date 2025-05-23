import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSchoolFlag } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Cbse = () => {

    useEffect(() => {
        document.title = "CBSE Info - Indian Olympiad School";
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                "Access CBSE-related information, including affiliation letters, annual planning, and safety certificates."
            );
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content =
                "Access CBSE-related information, including affiliation letters, annual planning, and safety certificates.";
            document.head.appendChild(meta);
        }

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);

    const cbseInfo = [
        { title: "Affiliation Letter I-XII", link: "/not-available" },
        { title: "Annual Planning 2023", link: "/not-available" },
        { title: "Building Safety Certificate", link: "/not-available" },
        { title: "Deo Letter", link: "/not-available" },
        { title: "Annual Planning 2023", link: "/not-available" },
        { title: "Building Safety Certificate", link: "/not-available" },
        { title: "Affiliation Letter I-XII", link: "/not-available" },
        { title: "Annual Planning 2023", link: "/not-available" },
        { title: "Building Safety Certificate", link: "/not-available" },
        { title: "Affiliation Letter I-XII", link: "/not-available" },
        { title: "Annual Planning 2023", link: "/not-available" },
        { title: "Building Safety Certificate", link: "/not-available" },       
        { title: "Affiliation Letter I-XII", link: "/not-available" },
        { title: "Annual Planning 2023", link: "/not-available" },
        { title: "Building Safety Certificate", link: "/not-available" },
        { title: "Affiliation Letter I-XII", link: "/not-available" },
        { title: "Annual Planning 2023", link: "/not-available" },
        { title: "Building Safety Certificate", link: "/not-available" },
    ];

return (
    <section className="w-full flex-center min-h-screen h-full flex-col relative mx-auto bg-gray-100">
         <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-5xl md:text-6xl font-bold text-center my-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          <FontAwesomeIcon icon={faSchoolFlag} className="text-amber-400 mr-3" />
          CBSE Information
        </motion.h1>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 mt-5">
            {cbseInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
                    <span className="text-blue-500 hover:text-blue-700">
                        {item.title}
                    </span>
                    <a href={item.link} className="text-gray-500 hover:text-gray-700" download>
                        <FontAwesomeIcon icon={faDownload} />
                    </a>
                </div>
            ))}
        </div>
    </section>
);
};

export default Cbse;
