import React from "react";

const LabsPage = () => {
return (
    <section className="w-full flex-center min-h-screen mb-10 h-full mt-2 md:mt-14 flex-col relative mx-auto bg-slate-50">
        <h1 className="text-2xl relative hori-strip after:top-10 md:after:top-14 md:mt-2 md:text-5xl text-blue-600 text-center font-bold">
            School Labs
        </h1>
        <div className="max-w-screen-xl mx-auto mt-5 p-2">
            <div className="flex flex-col text-center">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-3xl text-blue-600 font-semibold mb-4">Computer Lab</h2>
                    <p>
                        Our computer lab is equipped with the latest technology and
                        software to provide students with hands-on experience in
                        programming, web development, and data analysis.
                    </p>
                    <div className="mt-4 flex flex-col md:flex-row gap-5">
                        <img
                            src="null"
                            alt="Computer Lab"
                            className="mx-auto max-w-sm w-full bg-emerald-200 min-h-80 rounded-lg shadow-lg"
                        />
                        <img
                            src="null"
                            alt="Computer Lab"
                            className="mx-auto max-w-sm w-full bg-emerald-200 min-h-80 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-3xl text-blue-600 font-semibold mb-4">Chemistry Lab</h2>
                    <p>
                        The chemistry lab is designed for experiments and practical
                        learning in chemistry. Students can conduct experiments safely
                        under the guidance of qualified instructors.
                    </p>
                    <div className="mt-4 flex  flex-col md:flex-row gap-5">
                        <img
                            src="null"
                            alt="Chemistry Lab"
                            className="mx-auto max-w-sm w-full bg-emerald-200 min-h-80 rounded-lg shadow-lg"
                        />
                        <img
                            src="null"
                            alt="Chemistry Lab"
                            className="mx-auto max-w-sm w-full bg-emerald-200 min-h-80 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-3xl text-blue-600 font-semibold mb-4">Biology Lab</h2>
                    <p>
                        Our biology lab is equipped with microscopes and other instruments
                        for students to explore the world of living organisms and conduct
                        experiments in biology.
                    </p>
                    <div className="mt-4 flex  flex-col md:flex-row gap-5">
                        <img
                            src="null"
                            alt="Biology Lab"
                            className="mx-auto max-w-sm w-full bg-emerald-200 min-h-80 rounded-lg shadow-lg"
                        />
                        <img
                            src="null"
                            alt="Biology Lab"
                            className="mx-auto max-w-sm w-full bg-emerald-200 min-h-80 rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default LabsPage;
