import React from 'react'
import Card from './components/card.jsx'
import data from './data/data.jsx'






  



export default function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
             {...item}
              
          />
      )
  })  

 
  

        
  
  
          
  return (
 
      
         <div>
          <section className="flex flex-wrap gap-2 px-2 lg:gap-28 md:gap-16 md:px-10 lg:px-20 bg-[#2E243C]  py-10 ">
         
            {cards}
          </section>
      </div>
    
    
  )
}
 