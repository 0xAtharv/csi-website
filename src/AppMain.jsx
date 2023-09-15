import React,{useState} from "react"
import Card from './components/card.jsx'


import {technicals} from './data/data.jsx'
import {creatives} from './data/data.jsx'
import {inhouses} from './data/data.jsx'
import {publicRealtions} from './data/data.jsx'
import {sponsorss} from './data/data.jsx'



export default function AppMain() {




  const [but1, setBut1] = useState(false)
  const [but2, setBut2] = useState(false)
  const [but3, setBut3] = useState(false)
  const [but4, setBut4] = useState(false)
  const [but5, setBut5] = useState(false)
  const [but6, setBut6] = useState(false)

  const [display, setDisplay] = useState([])

  function technical(){
    setBut1((prevBut1) => !prevBut1)
    const butc1 = technicls.map(technical => (
      <Sample class={technical.class} name={technical.name} />
    ))
    setDisplay(butc1)
    setBut2(false)
    setBut3(false)
    setBut5(false)
    setBut6(false)
    setBut4(false)

   
  }

  function creative(){
 
  }
  function inhouse(){
 
  }
  
  function publicRelations(){
 
  }
  function sponsors(){
 
  }

 
  // const Menus = ["TECHNICAL","INHOUSE","CREATIVE","SPONSORSHIP","PUBLIC_RELATION"]   
 
  return (
    <div>

    <div className="bg-red h-5 w-5">
        <ul>
          {technicals.map((object) => (
            <li key={object.id}>{object.name}</li>
          ))}
        </ul>
        <h1>{technicals[0].name}</h1>
      </div>


      <div>
        <div className='bg-[#2E243C] text-white text-xs md:text-md lg:text-xl  py-[80px] lg:py-[150px] md:py-[120px] px-2  	'>    
      <div className='   justify-center'>
      
      <div className='   flex lg:gap-14 gap-1 flex-wrap mx-[2px] lg:mx-28 md:mx-16 '>
          
      
          <button onClick={technical}  className='mx-auto' type='button' >
          <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  py-3 lg:py-5 w-auto sm:w-[110px] md:w-[120px] lg:w-[180px] rounded-full px-4  '>
        <span className=' '>TECHNICAL</span>
        <div className="bg-red">
      {technicals.map((object)=>{
            <h1>{object.instalink}</h1>
          })}
        </div>
      </div>
        </button>
        <button onClick={creative}  className='mx-auto' type='button' >
          <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  py-3 lg:py-5 w-auto sm:w-[110px] md:w-[120px] lg:w-[180px] rounded-full px-4  '>
        <span className=' '>CREATIVE </span>
      </div>
        </button>
        <button onClick={inhouse}  className='mx-auto' type='button' >
          <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  py-3 lg:py-5 w-auto sm:w-[110px] md:w-[120px] lg:w-[180px] rounded-full px-4  '>
        <span className=' '> INHOUSE</span>
      </div>
        </button>
        <button onClick={publicRelations}  className='mx-auto' type='button' >
          <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  py-3 lg:py-5 w-auto sm:w-[110px] md:w-[120px] lg:w-[180px] rounded-full px-4  '>
        <span className=' '>PUBLICRELATION </span>
      </div>
        </button>
        <button onClick={sponsors}  className='mx-auto' type='button' >
          <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  py-3 lg:py-5 w-auto sm:w-[110px] md:w-[120px] lg:w-[180px] rounded-full px-4  '>
        <span className=' '>SPONSORS </span>
      </div>
        </button>
       
       
  
  
      </div>
    
          
      </div>
      
    </div>
      
    

    </div>
    <section className="flex flex-wrap gap-2 px-2 lg:gap-28 md:gap-16 md:px-10 lg:px-20 bg-[#2E243C]  py-10 ">
         
       
       </section>
    </div>
    
  )
}
 


 




