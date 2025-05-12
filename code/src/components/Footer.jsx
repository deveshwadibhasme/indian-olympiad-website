import React from 'react'
import Logo from '../assets/logo.png';
import {faFacebook ,faInstagram ,faTwitter ,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white max-w-screen w-full h-full min-h-90 pt-5 mt-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center gap-8">
        {/* Logo and Address */}
        <div className="flex-1 min-w-[250px]">
          <img src={Logo} alt="School Logo" className="h-16 mb-4" />
          <p className="text-sm leading-6">
            61/1, Kamptee Ranala Bhilgaon Road, Nagpur – 440026
          </p>
          <p className="text-sm leading-6 mt-2">
            115/116/117, Near CID Headquarters, Prashant Nagar, Nagpur – 440015
          </p>
          <div className="mt-2 text-sm">
            <p>+919823084786  +917028997786</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold mb-2 border-b border-white inline-block">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/infrastructure" className="hover:underline">Infrastructure</a></li>
            <li><a href="/labs" className="hover:underline">Labs</a></li>
            <li><a href="/carrer" className="hover:underline">Career</a></li>
            <li><a href="/fee-structure" className="hover:underline">Fee Structure</a></li>
            <li><a href="/admission-guidelines" className="hover:underline">Admission Guidelines</a></li>
          </ul>
        </div>

        {/* Other Links */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold mb-2 border-b border-white inline-block">Other Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/transport-routes" className="hover:underline">Route Transport</a></li>
            <li><a href="/activity-calender" className="hover:underline">Activity Calendar</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/school-timing" className="hover:underline">School Timing</a></li>
            <li><a href="/admission-guidelines" className="hover:underline">Admission Guidelines</a></li>
          </ul>
        </div>

        {/* Information */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold mb-2 border-b border-white inline-block">Information</h3>
          <p className="text-sm mt-4 leading-6">
            Indian Olympiad School also known as IOS. The school was established in 2016. Indian Olympiad School is a Co-Ed school affiliated with the Central Board of Secondary Education (CBSE). The Universal Education Society manages it.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="w-8 h-8 bg-white text-[#003366] rounded-full flex items-center justify-center hover:bg-gray-200">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="w-8 h-8 bg-white text-[#003366] rounded-full flex items-center justify-center hover:bg-gray-200">
              <FontAwesomeIcon icon={faInstagram} />
            </a>          
            <a href="#" className="w-8 h-8 bg-white text-[#003366] rounded-full flex items-center justify-center hover:bg-gray-200">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="w-8 h-8 bg-white text-[#003366] rounded-full flex items-center justify-center hover:bg-gray-200">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div> 
      <div className="text-center text-sm mt-10 border-t border-white pt-4">
        © {new Date().getFullYear()} — All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer