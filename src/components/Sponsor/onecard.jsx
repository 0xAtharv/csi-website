import React from 'react'

export default function Onecard(props) {

  
    return (
        <div className="        mx-auto my-10 w-32 h-32 md:w-52 md:h-52 lg:w-64 lg:h-64   ">
            
             
           <img src={`../public/images/${props.Sponimg}`} className=" w-32 h-32 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-xl mx-auto Shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]  " />
           
        </div>
        
        
        
        
    )
}
// bg-gradient-to-tr from-neutral-900 via-[#650873]  to-[#72247e76]
