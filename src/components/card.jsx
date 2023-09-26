import React from "react";
import { data } from "./Data";

export default function Card({data}){
    
    return(
        <>
            <div className="mx-8 px-2 py-2 my-8 bg-white relative rounded-tl-lg rounded-br-lg group md:mx-44 md:w-96 md:h-96 lg:h-64 lg:w-64 lg:mx-8 lg:[&:nth-child(9)]:ml-[350px]">
                <img src={data.img} />
                    <div className="absolute bottom-4 -left-0 opacity-0 duration-300 group-hover:translate-x-[30%] group-hover:opacity-100" >
                        <h2 className="text-white font-bold text-xl ">{data.name}</h2>
                        <p className="text-orange-500 text-md my-1 mb-2 italic">{data.pos}</p>
                        <a href={data.insta} className="text-white text-3xl mr-5"><i class="fa-brands fa-instagram" ></i></a>
                        <a href={data.linkedin} className="text-white text-3xl"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
            </div>
        </>
        )
    }
    