import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fierce-scrubland-09393.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  }, []);
  return (
    <div>
      <div className="container mx-auto py-32 px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {products.length === 0 ? (
            <div
              id="preloader"
              className="flex items-center justify-center min-h-screen"
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
              <Product key={product._id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
