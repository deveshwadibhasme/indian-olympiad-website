import React, { useEffect } from "react";
import { useState } from "react";
import ContactLayout from "../layouts/ContactLayout";

const ContactPage = () => {
  const [dirChange, setdirChange] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full flex-center flex-col relative mx-auto bg-slate-50">
      <div className="max-w-full rounded-xl bg-white w-full min-h-[550px] shadow-sm shadow-slate-500 mx-auto px-6 pb-9 flex items-center flex-col">
        <h1 className="text-4xl md:text-heading mt-1 relative hori-strip after:top-13 md:after:top-17 text-shade-blue-light text-center font-bold">
          Contact Us 
        </h1>
        <div
          onClick={() => setdirChange(!dirChange)}
          className={`w-96 min-h-14 mt-10 flex relative bg-slate-200 rounded-xl ${
            !dirChange ? "active-left" : "active-right"
          }`}
        >
          <button
            className={`flex-center z-10 relative w-[50%] text-xl font-semibold rouded-xl ${
              !dirChange ? "text-white" : "text-black"
            }`}
          >
            Bhilgaon
          </button>
          <button
            className={`flex-center z-10 relative w-[50%] text-xl font-semibold rouded-xl ${
              !dirChange ? "text-black" : "text-white"
            }`}
          >
            Prashant Nagar
          </button>
        </div>
        <hr />
        <div className="flex flex-col mt-5 items-center w-full gap-4">
          <ContactLayout tabChange={dirChange} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
