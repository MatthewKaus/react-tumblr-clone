import React from "react";
import Navbar from "../component/Navbar";
import Navbartest from "../component/Navbartest";
import Post from "../component/Post";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      {/* <Navbartest /> */}
      <div className="flex justify-center">
        <div className="flex-col justify-center ">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};
