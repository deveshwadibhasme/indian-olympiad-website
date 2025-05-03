import React from "react";
import facultyDetails from "../data/faculty-details.js";

const FacultyDetails = () => {
  return (
    <section className="w-full flex-center min-h-screen h-full mt-2 md:mt-14 flex-col relative mx-auto bg-gray-100">
      <h1 className="text-2xl md:mt-2 md:text-5xl relative hori-strip after:top-10 md:after:top-15 text-blue-600 text-center font-bold">
        Faculty Details
      </h1>
      <div className="max-w-screen-xl w-full mx-auto mt-10 p-2">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-5 min-h-screen">
          {facultyDetails.map((faculty, index) => (
              <div
                key={index}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();    
                    e.target.parentElement.classList.replace("rotate-y-0","-rotate-y-180");
                    e.target.parentElement.nextSibling.classList.replace("rotate-y-180","-rotate-y-0");
                    setTimeout(() => {
                      e.target.parentElement.classList.replace("-rotate-y-180","rotate-y-0");
                      e.target.parentElement.nextSibling.classList.replace("-rotate-y-0","rotate-y-180");
                    }, 3000);
                }}
                className="group  relative text-center rounded-lg flex flex-col items-center h-72    justify-center overflow-hidden cursor-grab transition-shadow duration-300 ease-in-out transform perspective-normal bg-transparent"
              >
                <div className="relative w-full backface-hidden group-hover:-rotate-y-180 transform-3d transition-transform duration-600 origin-center h-full rotate-y-0 ease-in-out ">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full absolute h-full object-cover"
                  />
                  <h2 className="text-lg font-bold relative text-white text-shadow bg-blue-950">{faculty.name}</h2>
                </div>
                <div className="absolute bg-white shadow-2xl border inset-0 flex flex-col items-center justify-center p-4 backface-hidden rotate-y-180 group-hover:-rotate-y-0 transform-3d transition-transform duration-600 origin-center">  
                  <p className="text-gray-600 text-xl">{faculty.designation}</p>
                  <p className="text-gray-600 text-xl">{faculty.qualification}</p>
                  <p className="text-gray-600 text-xl">{faculty.experience}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyDetails;
