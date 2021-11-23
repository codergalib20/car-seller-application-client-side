import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Product from "./Product";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fierce-scrubland-09393.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Header />
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {products.length === 0 ? (
            <div
              id="preloader"
              className="flex items-center w-full justify-center min-h-screen"
            >
              <div className="loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            products.map((product) => (
              <Product key={product.img} product={product} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
