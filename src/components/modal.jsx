import React from "react";

export default function Pop(props){
    return(
        <div className= " fixed top-10 z-10 left-[0%] w-80 h-40 bg-white text-center sm:left-0 md:left-[40%]" id="pop">
            <button className = "absolute left-0 border-2 px-4 py-2" id="clear">X</button>
            <h1 className='text-2xl'>{props.title}</h1>
            <p className="my-2">{props.detail}</p>
        </div>
    )
}