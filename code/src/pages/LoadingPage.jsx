import React from "react";
import { ClipLoader } from "react-spinners"; // Install this library using `npm install react-spinners`

const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <ClipLoader color="#4F46E5" size={50} />
            <h1 className="mt-4 text-lg font-medium text-gray-700">
                Coming to your screen soon...
            </h1>
        </div>
    );
};

export default LoadingPage;