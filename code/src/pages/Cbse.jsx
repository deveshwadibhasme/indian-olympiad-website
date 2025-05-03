import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Cbse = () => {

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
    <section className="w-full flex-center min-h-screen h-full mt-2 md:mt-14 flex-col relative mx-auto bg-gray-100">
        <h1 className="text-2xl md:mt-2 md:text-5xl relative hori-strip after:top-10 md:after:top-15 text-blue-600 text-center font-bold">
            CBSE Information
        </h1>
        
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
