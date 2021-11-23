import React from "react";
import { FaChevronRight, FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";
import bannerImage from "../../image/slide-01.jpg";

const bannerStyle = {
  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImage}) no-repeat`,
  backgroundSize: "cover",
  backgroundPosition: "right",
  minHeight: "130vh",
};

const Banner = () => {
  return (
    <div style={bannerStyle}>
      <div className="container py-100 px-4 mx-auto pr-20 lg:flex lg:items-center lg:justify-between h-full">
        <div className="pr-10">
          <h1 className="text-3xl lg:text-6xl text-white font-bold">
            Accelerating the future rating the
          </h1>
          <p className=" text-lg lg:text-2xl text-white mt-4">
            We offer over 9,500 new and used vehicles and if you
            <br />
            need help finding nything we have a 24/7 team
          </p>
          <Link
            className="text-md font-medium text-red-50 flex items-center uppercase border-2 py-3 px-8 w-56 mt-4 border-red-50 hover:bg-red-50 hover:text-red-700 animation-duration"
            to="/allProducts"
          >
            More Products <FaChevronRight className="ml-2" />
          </Link>
        </div>
        <div className=" lg:mt-32">
          <Link to="/allProducts">
            <div className="animation-ball flex items-center text-center justify-center flex-col">
              <h3 className="md:text-3xl text-xl font-bold text-white">
                We do not sell cars
              </h3>
              <h2 className="md:text-5xl text-2xl font-bold text-white uppercase py-2">
                We sell a dream
              </h2>
              <div></div>
              <h1 className="flex items-center justify-between mt-2 font-bold text-xl text-white">
                <FaHandsHelping className="mr-3" /> Get Approved
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
