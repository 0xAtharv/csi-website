import React from "react";
// import Gallery from "./components/Gallery";
// import Galleryy from "./components/galleryy";
import Swiper from "../src/components/Swiper"
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      {/* <Gallery /> */}
      {/* <Galleryy/> */}
      {/* <div className="font-Inter text-white text-2xl flex justify-center align-middle mt-20">GALLERY</div> */}
      <Swiper/>
      <Footer />
    </div>
  );
}
