import React from "react";
import useAuth from "../../hooks/useAuth";
import bannerImage from "../../image/animatedcar.gif";
import helloImg from "../../image/hello.png";
const bannerStyle = {
  backgroundImage: ` linear-gradient(#ff000079,#ff000079), url(${bannerImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div
      style={bannerStyle}
      className="min-h-screen flex items-center justify-center flex-col"
    >
      <h1 className="flex items-center font-bold text-red-50 md:text-6xl text-2xl">
        Hello! <img src={helloImg} alt="" /> {user?.displayName}
      </h1>
      <h2 className="md:text-4xl text-center text-xl font-bold text-white">
        You're most welcome to your dashboard
      </h2>
    </div>
  );
};

export default DashboardHome;
