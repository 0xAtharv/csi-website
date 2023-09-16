import React from 'react'

export default function Card(data) {

  
    return (
        <div className=" mx-auto  text-white md:text-lg lg:text-3xl ">
            
            <div className='relative  '>
            <img src={`../public/images/${data.coverImg}`} className=" w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-xl  my-6  " />
          <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  absolute top-0 right-0   py-2 px-1 rounded-bl-md rounded-tr-md '>
            
         <a href={`${data.instalink}`}><img   src={`../public/images/${data.instagram}`}  className="w-4 md:w-6 lg:w-8 m-1 lg:my-[10px] md:my-[8px] my-[3px]" /></a>  
         <a href={`${data.linkdinlink}`}><img   src={`../public/images/${data.linkdin}`}  className="w-4 md:w-6  lg:w-8  m-1 lg:my-[10px] md:my-[8px] my-[3px]" /></a>  
          
            
            </div>
            
            
            <div className='absolute bottom-0 rounded-b-md p-[2px] lg:p-2 md:p-[7px] lg:w-64 md:w-48 w-32  bg-gradient-to-r from-neutral-900 via-[#650873] to-[#6c27777b]  left-0'>
            <h1 className='mx-2 '>{data.name}</h1>
            </div>
            
           
            </div>
                        
                        

        </div>
    )
}
// bg-gradient-to-tr from-neutral-900 via-[#650873]  to-[#72247e76]
