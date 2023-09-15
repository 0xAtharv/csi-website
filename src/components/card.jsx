import React from "react"; 
import { data } from "./data";

export default function Card({data}){
    
    return(
        
        <div className= "w-60 mx-12 my-4  rounded-md relative group border-solid border-2 md:w-[500px] h-[300px]  first-letter: lg:w-96">
            {/* <img src = {`../public/${props.img}`} /> */}
            <img src= {data.img} className = "w-[100%] h-[100%] group-hover:scale-10 group-hover:scale-100 group-hover:blur-lg "/>
            <div className= " absolute  px-4 py-30  w-[100%] h-[100%] translate-y-[0px] invisible text-white transition ease-in-out  duration-500 group-hover:-translate-y-[200px]  group-hover:visible" >
                <h2>{data.info}</h2>
                <button className = "border-2  px-8 py-2 text-xl bg-green-400 hover:border-2 hover:scale-105 hover:border- rounded-md font-semibold my-8  absolute left-[35%] " >More</button>
            </div>
        </div>
        )
    }
    