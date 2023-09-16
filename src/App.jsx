import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import {Teams, Home, Sponsors, Events } from "./components/pages";

function App() {
  return (
    <div className="App">
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

export default App;
