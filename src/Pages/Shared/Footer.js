import React from "react";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegPaperPlane,
  FaWrench,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-700">
      <div className="container px-2 mx-auto py-5 grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div>
          <h1 className="font-bold text-lg text-justify text-gray-400">
            We provide everything you need to build an amazing dealership
            website developed especially for car sellers dealers or auto motor
            retailers.
          </h1>
        </div>
        <div>
          <ul>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaRegPaperPlane />
              </span>{" "}
              220E Front St. Burlington NC 27215
            </li>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaPhoneAlt />
              </span>{" "}
              (007) 123 456 7890
            </li>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaRegEnvelope />
              </span>{" "}
              support@example.com
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaWrench />
              </span>{" "}
              Change Oil and Filter
            </li>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaWrench />
              </span>{" "}
              Brake Pads Replacement
            </li>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaWrench />
              </span>{" "}
              Timing Belt Replacement
            </li>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaWrench />
              </span>{" "}
              Pre-purchase Car Inspection
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-900 py-3 text-center text-white">
        <span>
          &copy; coderboy galib <a href="#">Asadullah Hil Galib</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
