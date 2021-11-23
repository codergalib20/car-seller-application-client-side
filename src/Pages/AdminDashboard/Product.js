import React from "react";
import { FaSlackHash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Product = ({ product, handleDeleteOrder }) => {
  const { img, title, about, location, price, description, release, _id } =
    product;
  return (
    <div className="service-card p-4 border border-gray-400">
      <div className="relative overflow-hidden">
        <div className="card-shadow absolute h-full w-full flex items-center justify-center text-3xl text-white">
          <Link
            title="Purchase Order"
            className="cursor-pointer transform scale-100 hover:scale-125 transition-all duration-300"
            to={`/service/${_id}`}
          >
            <FaSlackHash />
          </Link>
        </div>
        <img style={{ minHeight: "250px" }} src={img} alt={title} />
      </div>
      <div className="text-gray-700 font-medium text-md py-3 text-center flex items-center justify-around">
        <span>Release : {release}</span>
        <span>${price}</span>
      </div>
      <div className="border border-gray-500"></div>
      <div className="py-6 text-center">
        <h4 className="font-medium text-lg text-gray-700">{title}</h4>
        <button
          onClick={() => handleDeleteOrder(_id)}
          className="bg-red-600 w-full mt-3 py-2 text-white font-medium text-md capitalize"
        >
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default Product;
