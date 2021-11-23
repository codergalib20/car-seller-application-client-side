import React from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import "./Home.css";
import Products from "./Products";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Products />
      <Reviews />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
