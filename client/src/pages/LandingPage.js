import React from "react";
import Navbar from "../components/Navbar";
import Navbartest from "../components/Navbartest";
import Post from "../components/Post";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      {/* <Navbartest /> */}
      <div className="flex justify-center">
        <div className="flex-col justify-center ">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};
