import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Gallery from "./components/Gallery";
// import Galleryy from "./components/galleryy";
import Swiper from "../src/components/Swiper"
import Footer from "./components/Footer";
import FindUS from "./components/FindUS";
import { Navbar } from "./components/Navbar";
import {Teams, Home, Sponsors, Events } from "./components/pages";

function App() {
  return (
    <div className="App">
      {/* <Gallery /> */}
      {/* <Galleryy/> */}
      {/* <div className="font-Inter text-white text-2xl flex justify-center align-middle mt-20">GALLERY</div> */}
      <Swiper/>
      <FindUS/>
      <Footer />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </div>
  );
}