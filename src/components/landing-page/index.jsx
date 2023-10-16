import React from "react";
import "./style.css"

export default function Landing(){
    return(
        <div className="relative w-full m-0 min-h-screen">
        <div
          className="absolute inset-0 bg-opacity-50 bg-black bg-no-repeat bg-cover bg-fixed" 
          style={{ backgroundImage: 'url("./images/landingg.png")',zIndex:0 }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="cssanimation sequence fadeInBottom flex flex-col items-center "> 
                <p className="text-purple-400 text-xl md:text-2xl font-semibold">WELCOME TO</p>
            <p className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">COMPUTER SOCIETY OF INDIA</p>
            <p className="text-white md:text-xl lg:text-2xl">THAKUR COLLEGE OF ENGINEERING AND TECHNOLOGY</p>
            
            </div>
        </div>
      </div>
    )
}