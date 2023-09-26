import React,{useState} from "react"
import Card from './card.jsx'
import {technicals, creatives, inhouses, publicRelation, sponsorss} from './data.js'

export default function WCpage() {

  const [category, setCategory] = useState('technical');
  
  const categories = {
    technical: technicals,
    creatives: creatives,
    inhouses: inhouses,
    sponsors: sponsorss,
    publicRelations: publicRelation,
  };
  
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const functions = [
    {
      name: "TECHNICAL",
      function: () => handleCategoryChange('technical')
    },
    {
      name: "CREATIVE",
      function: () => handleCategoryChange('creatives')
    },
    {
      name: "INHOUSE",
      function: () => handleCategoryChange('inhouses')
    },
    {
      name: "SPONSOR",
      function: () => handleCategoryChange('sponsors')
    },
    {
      name: "PUBLIC-RELATIONS",
      function: () => handleCategoryChange('publicRelations')
    }
  ]
     
  const buttons = functions.map(button => (
    <div onClick={button.function} className='flex justify-center items-center text-center w-auto py-3 px-8 cursor-pointer text-xs md:text-md lg:text-lg last:mx-12 last:col-start-1 last:col-end-3 sm:last:col-start-2 sm:last:col-end-4 md:last:mx-0 md:last:col-start-5 md:last:col-end-6 rounded-full bg-gradient-to-tr from-[#35013d] via-[#700880] to-[#35013d]'>
      {button.name}  
    </div>
  ))

  return (
    <div className='bg-[#2E243C] w-full flex flex-col px-10 box-border h-auto'>
      <div className='text-white justify-center pt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-y-3 gap-x-8 auto-cols-fr'>
       {buttons}
      </div>
    
      <section className="mt-8 flex flex-wrap justify-center gap-x-4">
        {categories[category].map((item) => (
          <Card
            key={item.id}
            name={item.name}
            coverImg={item.coverImg}
            instalink={item.instalink}
            linkdinlink={item.linkdinlink}
            />
        ))}
      </section>
    </div> 
  )
}
 


 