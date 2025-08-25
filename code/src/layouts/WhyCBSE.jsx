import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt, faChalkboardTeacher, faClipboardList, faTrophy, faClock, faCode,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const features = [
  // {
  //   icon: faClock,
  //   title: "Info Activity Calender",
  //   description: "Always pursuit such personalities who are capable of fulfillment of student's overall development requirement.",
  //   link: null,
  // },
  {
    icon: faChalkboardTeacher,
    title: "Advanced Teaching Faculty",
    // description: "IOS inculcates values in the student that help them to grow up into the people with a strong character.",
    link: "/faculty-details",
  },
  // {
  //   icon: faCalendarAlt,
  //   title: "Activity Calendar",
  //   description: "Our class rooms are spacious, clean, well ventilated and high in natural and electricity lights.",
  //   link: "/activity-calender",
  // },
  {
    icon: faClipboardList,
    title: "Advanced Study Plans",
    // description: "Our curriculum is designed to help our student achieve their full potential at various extra-curricular activities.",
    link: "/about-us",
  },
  {
    icon: faGraduationCap,
    title: "Focus on Competitive Exams",
    // description: "We believe that every child learns at his/her own pace and if he/she is given the right environment, it can lead to miraculous progress.",
    link: "/achievers",
  },
  // {
  //   icon: faTrophy,
  //   title: "Focus On Success",
  //   description: "The school's curriculum has been designed keeping in mind the competitive exams that are held after 12th standard.",
  //   link: null,
  // },
];

const WhyCBSE = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Why We Are The Best CBSE School in Nagpur
          <p className="text-center font-light text-gray-600 mt-2 text-sm">Click to explore sections</p>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link || '#'} 
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 flex-shrink-0">
                <FontAwesomeIcon icon={feature.icon} className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyCBSE;