import React, { useState } from "react";
import swal from "sweetalert";

const CreateAdmin = () => {
  const [email, setEmail] = useState("");
  const onBlurChange = (e) => {
    setEmail(e.target.value);
  };
  const submitNewAdmin = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://fierce-scrubland-09393.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 0) {
          swal("Something wrong please try another id", "", "error");
        } else {
          swal("Success", "Admin Create", "success");
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={submitNewAdmin}
        className="w-full max-w-lg flex items-center justify-evenly flex-col p-5  shadow-lg "
        style={{ minHeight: "300px" }}
      >
        <h1 className="text-center font-bold text-2xl text-red-700 capitalize">
          Create a new admin
        </h1>
        <input
          onBlur={onBlurChange}
          type="text"
          placeholder="E-mail"
          className="w-full border border-red-400 py-2 px-4"
        />
        <button className="text-lg font-bold text-white bg-red-700 py-2 px-10">
          Add Admin
        </button>
      </form>
    </div>
  );
};

export default CreateAdmin;
