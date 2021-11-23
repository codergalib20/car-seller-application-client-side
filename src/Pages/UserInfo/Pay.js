import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
import bankCard from "../../image/bank.png";

const Pay = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg shadow-2xl p-5">
        <div>
          <img className="w-full" src={bankCard} alt="" />
        </div>
        <div className="flex justify-between px-10">
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
        <div className="mt-5 flex items-center justify-between border border-purple-800">
          <input
            className=" w-11/12 py-2 px-5"
            type="text"
            placeholder="Card Number"
          />
          <div className="font-bold display-none md:flex text-2xl text-center text-red-800 w-1/12">
            <FaRegNewspaper />
          </div>
        </div>
        <div className="md:flex items-center justify-between py-6">
          <input
            className="border-2 md:mb-0 mb-3 px-2 rounded-2xl border-gray-500 font-bold text-lg"
            type="date"
            id="birthday"
            name="birthday"
          />
          <input
            className="border-2 px-2 rounded-2xl border-gray-500 font-bold text-lg"
            type="text"
            placeholder="CVC code"
          />
        </div>
        <div className="py-7">
          <input
            className="w-full border-2 py-2 px-4 border-gray-500"
            type="text"
            placeholder="Card Owner Name"
          />
          <div className="text-center py-7">
            <button className="py-2 px-6 bg-red-600 text-white font-bold">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
