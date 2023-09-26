import React from 'react'
import WCpage from './components/WCpage.jsx'
import Timeline from './components/timeline/index.jsx';
// import { Home } from './components/pages';
import PrevEvents from './components/prev-events/index.jsx';


import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Gallery from "./components/Gallery";
// import Galleryy from "./components/galleryy";
import Swiper from "../src/components/Swiper"
import Footer from "./components/Footer";
import FindUS from "./components/FindUS";
import { Navbar } from "./components/Navbar";
import {Teams, Home, Sponsors, Events } from "./components/pages";
// import Sponsors from './components/Sponsors'
import Timeline from "./components/timeline";
import Landing from "./components/landing-page";
import EventsPage from "./components/events-page";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Timeline />
      {/* <Gallery /> */}
      {/* <Galleryy/> */}
      {/* <div className="font-Inter text-white text-2xl flex justify-center align-middle mt-20">GALLERY</div> */}
      <Swiper/>
      <FindUS/>
      <Footer />
      
      
      <EventsPage />
      
      <Sponsors/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </div>
  )
}