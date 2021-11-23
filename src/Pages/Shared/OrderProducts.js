import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import OrderPlace from "./OrderPlace";

const OrderProducts = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fierce-scrubland-09393.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, []);

  const { title, about, img, price, description, release, location } = product;
  return (
    <>
      <Header />
      <div className="mt-5">
        <div className="flex items-center mx-auto justify-center w-full max-w-4xl">
          <img className="w-full" src={img} alt={title} />
        </div>
        <div className="shadow-md container mx-auto w-full max-w-4xl py-8 align-justify">
          <div className="sm:flex items-center justify-between py-3 shadow-lg px-8">
            <span className="font-medium flex  text-xl text-gray-900">
              {release}
            </span>
            <span className="font-medium flex  text-xl text-gray-900">
              $ {price}
            </span>
            <span className="font-medium flex  text-xl text-gray-900">
              {location}
            </span>
          </div>
          <div className="grid md:grid-cols-2 px-8 shadow-xl py-4">
            <h3 className="mb-5 md:mb-0">{title}</h3>
            <h5 className="uppercase">{about}</h5>
          </div>
          <div
            className="px-4 py-8 text-gray-600 shadow-xl"
            style={{ textAlign: "justify" }}
          >
            <p className="text-md font-semibold">{description}</p>
          </div>
          <div className="px-4 py-8 text-gray-600 shadow-xl">
            <button
              onClick={handleOpen}
              className="py-3 px-8 text-md bg-red-600 text-white font-bold"
            >
              Place Order
            </button>
            <OrderPlace
              open={open}
              handleClose={handleClose}
              handleOpen={handleOpen}
              title={title}
              about={about}
              price={price}
              release={release}
            ></OrderPlace>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderProducts;
