import React from "react";
import BhilGao from "../assets/ios-bhilgaon-img.png";
import PrashantNag from "../assets/prashant-nagar-img.jpg";
import { Link } from "react-router-dom";

const Branches = () => {
  return (
    <section
      id="branches"
      className="w-full py-16 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl mb-12 text-blue-600 text-center font-bold">
          Our Branches
        </h1>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {[
            { name: "Bhilgaon", image: BhilGao },
            { name: "Prashant Nagar", image: PrashantNag },
          ].map((branch) => (
            <div
              key={branch.name}
              className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video">
                <img
                  src={branch.image}
                  className="object-cover w-full h-full"
                  alt={`${branch.name} Branch`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {branch.name}
                </h2>
                <Link to={'/contact-us'} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 transform hover:scale-105">
                  Explore More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
