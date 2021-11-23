import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Product from "./Product";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fierce-scrubland-09393.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // Handle Order product delete
  const handleDeleteOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this deleted product",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://fierce-scrubland-09393.herokuapp.com/products/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remainingOrders = products.filter(
              (order) => order._id !== id
            );
            setProducts(remainingOrders);
            if (data.deletedCount === 1) {
              swal("", "Product deleted successfully!", "success");
            }
          });
      } else {
        swal("Your product is safe!");
      }
    });
  };
  return (
    <div>
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4">
          {products.map((product) => (
            <Product
              handleDeleteOrder={handleDeleteOrder}
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
