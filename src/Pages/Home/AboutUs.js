import React from "react";
import { FaCheck } from "react-icons/fa";
import aboutImg from "../../image/about.webp";
const AboutUs = () => {
  return (
    <div>
      <div className="container px-2 mx-auto grid md:grid-cols-2 grid-cols-1 gap-5 py-10">
        <div>
          <h1 className="text-lg font-medium text-gray-800">
            WE PROVIDE BEST SERVICES PROCESSUS DYNAMICUS QUI SEQUITUR MUTATIONEM
            CO MUTATIONEM.
          </h1>
          <p className="py-3 text-gray-600 text-justify">
            Dynamicus qui sequitur mutationem consuetudium lectorum. Mirum est
            notare quam littera gothica, quam nunc putamus parum
            claram.dynamicus, qui sequitur mutationem consuetudium lectorum.
            Mirum est notare quam littera gothica, quam nunc putamus parum
            claram.dynamicus, qui sequitur mutationem consuetudium lectorum.
          </p>
          <ul className="pl-8">
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaCheck />
              </span>{" "}
              Dynamicus, qui sequitur mutationem consuetudium lectorum
            </li>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaCheck />
              </span>{" "}
              Dynamicus, qui sequitur mutationem consuetudium lectorum
            </li>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaCheck />
              </span>{" "}
              Dynamicus, qui sequitur mutationem consuetudium lectorum
            </li>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaCheck />
              </span>{" "}
              Dynamicus, qui sequitur mutationem consuetudium lectorum
            </li>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaCheck />
              </span>{" "}
              Dynamicus, qui sequitur mutationem consuetudium lectorum
            </li>
            <li className="flex items-center py-1 text-gray-400 font-medium">
              <span className="text-red-600 mr-3">
                <FaCheck />
              </span>{" "}
              Dynamicus, qui sequitur mutationem consuetudium lectorum
            </li>
          </ul>
        </div>
        <div>
          <img className="w-full" src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
