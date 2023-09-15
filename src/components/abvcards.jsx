import React ,{useState} from 'react'





export default function abvcards() {

  
  const Menus = ["TECHNICAL","INHOUSE","CREATIVE","SPONSORSHIP","PUBLIC_RELATION"]
  return (
  <div className='bg-[#2E243C] text-white text-xs md:text-md lg:text-xl  py-[80px] lg:py-[150px] md:py-[120px] px-2  	'>
    
   
      
    
    <div className='    justify-center'>
    
    <div className='   flex lg:gap-14 gap-1 flex-wrap mx-[2px] lg:mx-28 md:mx-16 '>
     
      {Menus.map((Menu)=> (
        <button onClick={Menu}  className='mx-auto' type='button' >
        <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  py-3 lg:py-5 w-auto sm:w-[110px] md:w-[120px] lg:w-[180px] rounded-full px-4  '>
      <span className=' '>{Menu} </span>
    </div>
      </button>
      ))
      }
     


    </div>
   

  
  
   
        
    </div>
    
  </div>
  )
}