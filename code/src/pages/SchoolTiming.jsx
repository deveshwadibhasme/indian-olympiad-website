import React, { useEffect } from "react";

const SchoolTiming = () => {
    
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container p-4 w-full flex items-center  min-h-screen mb-10 h-full mt-2 md:mt-14 flex-col relative mx-auto bg-slate-50">
      <h1 className="text-2xl md:mt-2 relative hori-strip after:top-15 md:text-4xl text-blue-600 text-center font-bold">
        School Timings
      </h1>
      <div className="flex flex-col text-center mt-10 gap-20 p-3">
        <div>
          <h2 className="text-xl font-semibold mb-2">IOS School Timings</h2>
          <p>
            <strong>Grade Nursery to Kindergarten:</strong> 10:00 am to 12:30 pm
          </p>
          <p>
            <strong>Grade I & II:</strong> 8:00 am to 12:30 pm
          </p>
          <p>
            <strong>Grade III to XII:</strong> 8:00 am to 2:30 pm
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Administration Office</h2>
          <p>
            <strong>Timing:</strong> 8:00 am to 3:00 pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolTiming;
