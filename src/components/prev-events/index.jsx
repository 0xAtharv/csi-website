import React from "react";
import {prevEvents} from "./prevEvents";

export default function PrevEvents(){

    const prevs = prevEvents.map(prevEvent => (
        <div className="w-96 h-auto bg-black flex flex-col rounded-lg hover:shadow-xl hover:shadow-purple-700">
            <img src={prevEvent.image} className="object-cover rounded-t-lg h-96"/>
            <div key={prevEvent.key} className="text-white p-4 text-center">
                <p className="font-bold text-lg">{prevEvent.name}</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ipsum necessitatibus voluptatem perspiciatis debitis. Animi dignissimos et ex recusandae reiciendis quasi, adipisci dolor! Assumenda minus dignissimos consectetur reiciendis alias perspiciatis ipsa illo molestiae maiores? Officia iste aliquam asperiores ullam excepturi praesentium ea velit voluptatum possimus consequatur, corporis rem quidem earum.</p>
            </div>
        </div>
    ))

    return(
       <div className="flex flex-col items-center justify-center border-box bg-slate-800">
        <p className="w-auto h-auto text-white text-5xl font-bold leading-8 mt-10 p-4 hover:shadow-md hover:shadow-purple-500">PAST EVENTS</p>
        <div className="grid grid-cols-3 mt-10 gap-10">
            {prevs}
        </div>
       </div>
    )
}