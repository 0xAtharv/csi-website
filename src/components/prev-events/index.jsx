import React from "react";
import {prevEvents} from "./prevEvents";

export default function PrevEvents(){

    const prevs = prevEvents.map(prevEvent => (
        <div className="w-64 sm:w-72 md:w-80 lg:w-80 xl:w-96 h-auto bg-black flex flex-col rounded-lg hover:shadow-xl hover:shadow-purple-700">
            <img src={prevEvent.image} className="object-cover rounded-t-lg h-64 sm:h-72 md:h-80 lg:h-80 xl:h-96"/>
            <div key={prevEvent.key} className="text-white p-4 md:p-6 text-center">
                <p className="font-bold text-lg md:text-xl ">{prevEvent.name}</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ipsum necessitatibus voluptatem perspiciatis debitis. Animi dignissimos et ex recusandae reiciendis quasi, adipisci dolor! Assumenda minus dignissimos consectetur reiciendis alias perspiciatis ipsa illo molestiae maiores? Officia iste aliquam asperiores ullam excepturi praesentium ea velit voluptatum possimus consequatur, corporis rem quidem earum.</p>
            </div>
        </div>
    ))

    return(
       <div className="flex flex-col items-center justify-center border-box bg-slate-800 p-4 lg:p-4 w-screen ">
        <p className="w-auto h-auto text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-8 my-4 p-4 hover:shadow-md hover:shadow-purple-500">PAST EVENTS</p>
        <div className="grid grid-cols-1 gap-10 md:gap-6 lg:gap-4 xl:gap-6 sm:grid-cols-2  lg:grid-cols-3 ">
            {prevs}
        </div>
       </div>
    )
}