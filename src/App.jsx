import React from 'react'
import WCpage from './components/teams/WCpage.jsx'
import Timeline from './components/timeline/index.jsx';
import { PreviousEvents } from './components/pages/PrevEvents.jsx';

import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Swiper from "./components/gallery/Swiper.jsx"
// import Footer from "./components/footer/Footer.jsx";
// import FindUS from "./components/FindUS.jsx";
// import { Navbar } from "./components/Navbar";
// import { Navbar } from './components/navbar/Navbar.jsx';
import {Teams, Home, Events } from "./components/pages";
import Sponsors from './components/Sponsor/Spons.jsx'
// import EventsPage from './components/events-page/index.jsx';

export default function App() {
  return (
    <div className="App">
      {/* <Gallery /> */}
      {/* <Galleryy/> */}
      {/* <div className="font-Inter text-white text-2xl flex justify-center align-middle mt-20">GALLERY</div> */}
      {/* <Navbar />
      <Timeline />
      <Swiper />
      <FindUS />
      <WCpage />
      <PrevEvents/>
      <Footer /> */}
      {/* <Home /> */}
      {/* <Navbar/> */}
      {/* <Sponsors/> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/prev-events" element={<PreviousEvents/>} />
      </Routes>
    </div>
  )
}