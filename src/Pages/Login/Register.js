import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import loginBanner from "../../image/car-2-bg-1.webp";
import "./Login.css";
const loginBannerStyle = {
  backgroundImage: `url(${loginBanner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Register = () => {
  const [inputData, setInputData] = useState({});
  const { registerUser, isLoading, user } = useAuth();
  const history = useHistory();

  const onBlurInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...inputData };
    newData[field] = value;
    setInputData(newData);
  };
  const submitRegisterForm = (e) => {
    e.preventDefault();
    if (inputData.password !== inputData.password2) {
      swal("Password did not match");
      return;
    }
    registerUser(inputData.email, inputData.password, inputData.name, history);
  };
  return (
    <div style={loginBannerStyle} className="min-h-screen bg-purple-700">
      <div className="container mx-auto flex items-center justify-between min-h-screen">
        <div></div>
        <div className="bg-purple-200 py-16 px-8 w-full max-w-xl">
          {!isLoading && (
            <div>
              <h2 className="text-purple-800 mb-6 text-3xl font-bold ">
                Register please
              </h2>{" "}
              <form onSubmit={submitRegisterForm} className="mb-4">
                <input
                  onBlur={onBlurInput}
                  className="w-full mb-5 py-4 px-4"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <input
                  onBlur={onBlurInput}
                  className="w-full mb-5 py-4 px-4"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <input
                  onBlur={onBlurInput}
                  className="w-full mb-5 py-4 px-4"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <input
                  onBlur={onBlurInput}
                  className="w-full mb-5 py-4 px-4"
                  type="password"
                  name="password2"
                  placeholder="Repeat Password"
                />
                <button
                  type="submit"
                  className="bg-purple-600 w-full py-2 text-lg font-bold text-white"
                >
                  Login
                </button>
              </form>
              <Link to="/login" className="font-medium text-red-700 text-lg">
                Already registered?
              </Link>
            </div>
          )}
          {isLoading && (
            <div className="flex items-center justify-center">
              <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
