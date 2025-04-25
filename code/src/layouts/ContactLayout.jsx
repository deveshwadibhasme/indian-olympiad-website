import React, { useEffect } from "react";
import BhilGao from "../assets/ios-bhilgaon-img.png";
import PrashantNag from "../assets/prashant-nagar-img.jpg";

const ContactLayout = ({ tabChange }) => {
  const [data, setData] = React.useState({});

  useEffect(() => {
    if (tabChange) {
      setData({
        image: PrashantNag,
        phone1: "+91 9823084786",
        phone2: "+91 7028997786",
        address:
          "115/116/117, near CID Headquarters, Prashant Nagar, Nagpur – 440015",
      });
    } else {
      setData({
        image: BhilGao,
        phone1: "+91 9823084786",
        phone2: "+91 7028997786",
        address:
          "61/1, Kamptee Ranala Bhilgaon Road, Bhilgaon, Nagpur – 440026",
      });
    }
  }, [tabChange]);

  return (
    <div className="bg-white p-8 min-h-96 rounded-lg relative shadow-md overflow-hidden max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white  mb-6 relative z-10">
        Contact Info
      </h2>
      <div className="grid md:grid-cols-2 gap-6 overflow-hidden shaded-bg">
        <img
          className="absolute top-0 left-0 h-full w-full object-cover"
          src={data.image}
          alt=""
        />
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white  mb-2">Location</h3>
          <p className="text-white ">{data.address}</p>
        </div>

        {/* Phone Numbers */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white  mb-2">Phone</h3>
          <p className="text-white ">{data.phone1}</p>
          <p className="text-white ">{data.phone2}</p>
        </div>

        {/* Email */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white  mb-2">Email</h3>
          <p className="text-white ">indianolympiadschool@gmail.com</p>
        </div>

        {/* Timings */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white  mb-2">
            School Timing
          </h3>
          <p className="text-white ">Mon - Sat: 09:00 am to 06:00 pm</p>
        </div>
      </div>
    </div>
  );
};

export default ContactLayout;
