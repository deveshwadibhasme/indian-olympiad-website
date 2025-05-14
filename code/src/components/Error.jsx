import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 text-gray-800 text-center p-5">
            <FontAwesomeIcon icon={faExclamationTriangle} className="text-6xl text-red-500 mb-5" />
            <h1 className="text-4xl font-bold mb-3">Oops! Something went wrong.</h1>
            <p className="text-lg mb-5">
                We can't seem to find the page you're looking for.
            </p>
            <button
                className="px-5 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => (window.history.back())}
            >
                Go Back <FontAwesomeIcon icon={faExclamationTriangle} className="ml-2" />
            </button>
        </div>
    );
};

export default Error;
