import React from 'react'
import { PreviousEvents } from '../src/components/pages/PrevEvents.jsx';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {Teams, Home, Sponsors, Events, WComittee } from "./components/pages";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/wc" element={<WComittee />} />
        <Route path="/prev-events" element={<PreviousEvents/>} />
      </Routes>
    </div>
  )
}