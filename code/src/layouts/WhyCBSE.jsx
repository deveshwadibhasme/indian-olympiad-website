import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt, faChalkboardTeacher, faClipboardList,
  faBullseye, faTrophy, faClock
} from '@fortawesome/free-solid-svg-icons';

const WhyCBSE = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Why We Are Best CBSE Schools in Nagpur
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faClock}
                className="w-6 h-6 text-green-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Info Activity Calender
            </h3>
            <p className="text-gray-600 text-sm">
              Always pursuit such personalities who are capable of fulfillment of
              student's overall development requirement.
            </p>
          </div>


          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="w-6 h-6 text-green-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Activity Calendar
            </h3>
            <p className="text-gray-600 text-sm">
              Our class rooms are spacious, clean, well ventilated and high in
              natural and electricity lights.
            </p>
          </div>


          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                className="w-6 h-6 text-green-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Advanced Teaching Faculty
            </h3>
            <p className="text-gray-600 text-sm">
              IOS inculcates values in the student that help them to grow up into
              the people with a strong character.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faClipboardList}
                className="w-6 h-6 text-green-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Adavanced Study Plans
            </h3>
            <p className="text-gray-600 text-sm">
              Our curriculum is designed to help our student achieve their full
              potential at various extra-curricular activities .
            </p>
          </div>


          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faBullseye}
                className="w-6 h-6 text-green-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Focus On Target
            </h3>
            <p className="text-gray-600 text-sm">
              We believe that every child learns at his/her own pace and if he/she
              is given the right environment, it can lay to miraculous progress.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faTrophy}
                className="w-6 h-6 text-green-500"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Focus On Success
            </h3>
            <p className="text-gray-600 text-sm">
              The school's curriculum has been designed keeping in mind the
              competitive exams that are held after 12th standard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCBSE;