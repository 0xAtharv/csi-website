import React,{useState} from "react"
import Card from './components/card.jsx'


import {technicals} from './data/data.jsx'
import {creatives} from './data/data.jsx'
import {inhouses} from './data/data.jsx'
import {publicRealtions} from './data/data.jsx'
import {sponsorss} from './data/data.jsx'



export default function AppMain() {

    const [category, setCategory] = useState('technical');
 
  // const Menus = ["TECHNICAL","INHOUSE","CREATIVE","SPONSORSHIP","PUBLIC_RELATION"]  
  const categories = {
    technical: technicals,
    creatives: creatives,
    inhouses: inhouses,
    publicRelations: publicRealtions,
    sponsors: sponsorss,
  };
  
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };
 
  return (
    <div>

   


      <div>
        <div className='bg-[#2E243C] text-white text-xs md:text-md lg:text-xl  py-[80px] lg:py-[150px] md:py-[120px] px-2  	'>    
      <div className='   justify-center'>
      
      <div className='   flex lg:gap-14 gap-1 flex-wrap mx-[2px] lg:mx-28 md:mx-16 '>
          
      
          <button onClick={() => handleCategoryChange('technical')}  className='mx-auto' type='button' >
          <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  py-3 lg:py-5 w-auto sm:w-[110px] md:w-[120px] lg:w-[180px] rounded-full px-4  '>
        <span className=' '>TECHNICAL</span>
        <div className="bg-red">
      {technicals.map((object)=>{
            <h1>{object.instalink}</h1>
          })}
        </div>
      </div>
        </button>
        <button onClick={() => handleCategoryChange('creatives')}  className='mx-auto' type='button' >
          <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  py-3 lg:py-5 w-auto sm:w-[110px] md:w-[120px] lg:w-[180px] rounded-full px-4  '>
        <span className=' '>CREATIVE </span>
      </div>
        </button>
        <button onClick={() => handleCategoryChange('inhouses')}  className='mx-auto' type='button' >
          <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  py-3 lg:py-5 w-auto sm:w-[110px] md:w-[120px] lg:w-[180px] rounded-full px-4  '>
        <span className=' '> INHOUSE</span>
      </div>
        </button>
        <button onClick={() => handleCategoryChange('publicRelations')}  className='mx-auto' type='button' >
          <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  py-3 lg:py-5 w-auto sm:w-[110px] md:w-[120px] lg:w-[180px] rounded-full px-4  '>
        <span className=' '>PUBLICRELATION </span>
      </div>
        </button>
        <button onClick={() => handleCategoryChange('sponsors')}  className='mx-auto' type='button' >
          <div className='bg-gradient-to-tr from-neutral-900 via-[#700880]  to-neutral-900  py-3 lg:py-5 w-auto sm:w-[110px] md:w-[120px] lg:w-[180px] rounded-full px-4  '>
        <span className=' '>SPONSORS </span>
      </div>
        </button>
       
       
  
  
      </div>
    
          
      </div>
      
    </div>
      
    

    </div>
    <section className="flex flex-wrap gap-2 px-2 lg:gap-28 md:gap-16 md:px-10 lg:px-20 bg-[#2E243C]  py-10 ">
    {categories[category].map((item) => (
          <Card
            key={item.id}
            name={item.name}
            coverImg={item.coverImg}
            instalink={item.instalink}
            instagram = {item.instagram}
            linkdin={item.linkdin}
            linkdinlink={item.linkdinlink}
           
          />
        ))}
       
       </section>
    </div>
    
  )
}
 


 