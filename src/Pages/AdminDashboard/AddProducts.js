import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import bannerImage from "../../image/addProductBanner.jfif";
const addProductsBackground = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${bannerImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const AddProducts = () => {
  const [release, setRelease] = useState(new Date());
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.release = release.toLocaleDateString();
    const url = `https://fierce-scrubland-09393.herokuapp.com/products/`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => swal("Success", "Product Added Successfully", "success"))
      .catch((err) => console.log(err));
    reset();
  };
  return (
    <div
      style={addProductsBackground}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-lg shadow-2xl p-6">
        <h1 className="font-bold text-2xl mb-2 text-white">
          Add an new products
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={{ background: "transparent", color: "#fff" }}
            placeholder="Name"
            className="trnasparent  w-full py-2 px-4 text-lg font-medium border border-red-600 mb-3 "
            {...register("title", { required: true })}
          />
          <input
            style={{ background: "transparent", color: "#fff" }}
            placeholder="Img url"
            className=" w-full py-2 px-4 text-lg font-medium border border-red-600 mb-3 "
            {...register("img", { required: true })}
          />
          <input
            style={{ background: "transparent", color: "#fff" }}
            placeholder="Description"
            className="w-full py-2 px-4 text-lg font-medium border border-red-600 mb-3 "
            {...register("description", { required: true })}
          />
          <input
            style={{ background: "transparent", color: "#fff" }}
            placeholder="Location"
            className="w-full py-2 px-4 text-lg font-medium border border-red-600 mb-3 "
            {...register("location", { required: true })}
          />
          <input
            style={{ background: "transparent", color: "#fff" }}
            placeholder="About"
            className="w-full py-2 px-4 text-lg font-medium border border-red-600 mb-3 "
            {...register("about", { required: true })}
          />
          <input
            style={{ background: "transparent", color: "#fff" }}
            placeholder="Price"
            type="number"
            className="w-full py-2 px-4 text-lg font-medium border border-red-600 mb-3 "
            {...register("price", { required: true })}
          />
          <input
            type="submit"
            value="Add Product"
            className="font-bold text-lg text-white bg-red-600 py-2 px-8 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
