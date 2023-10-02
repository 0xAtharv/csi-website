import React from "react";

export default function Landing(){
    return(
        <div className="relative w-full m-0 min-h-screen">
        <div
          className="absolute inset-0 bg-opacity-50 bg-black bg-no-repeat bg-cover bg-fixed" 
          style={{ backgroundImage: 'url("./images/landingg.png")',zIndex:0 }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center"> 
                <p className="text-purple-400 text-xl md:text-2xl font-semibold">WELCOME TO</p>
                <p className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">CSI-TCET</p>
            </div>
        </div>
      </div>
    )
}