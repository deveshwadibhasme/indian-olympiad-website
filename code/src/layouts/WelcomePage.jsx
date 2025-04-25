import React from "react";

const WelcomePage = () => {
  return (
    <div className="w-full min-h-96 relative flex items-center justify-center bg-white">
      <div className="max-w-screen text-center w-full hori-strip">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-amber-500">
          Welcome to Indian Olympiad School!
        </h1>
        <p className="text-blue-700 text-4xl md:text-5xl font-semibold md:font-bold mb-6">
          An Outstanding Curriculum and IB School in Nagpur.
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
