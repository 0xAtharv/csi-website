import React from "react";
import Swiper from "../gallery/Swiper";
import Footer from "../footer/Footer";
import FindUS from "../FindUS";
import { Navbar } from "../navbar/Navbar";
// import Timeline from "../timeline";
import Landing from "../landing-page";

export const Home = () => {
  return (
    <>
      <div className="bg-[url('../public/csi-website.png')] bg-fixed">
        <Navbar />
        <Landing />
        {/* <Timeline /> */}
        <Swiper />
        <FindUS />
        <Footer />
      </div>
    </>
  );
};
