import React from "react";
import Timeline from "./components/timeline";
import Landing from "./components/landing-page";
import EventsPage from "./components/events-page";

export default function App(){
  return(
    // <div className="text-center font-bold">start here</div>
    <div className="app">
      {/* <Landing /> */}
      {/* <Timeline /> */}
      <EventsPage />
    </div>
  )
}