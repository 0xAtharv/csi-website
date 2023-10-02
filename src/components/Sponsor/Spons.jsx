

import React from 'react'
import data from './data1'
import Onecard from './onecard.jsx'
import Header from '../header.jsx'





    
export default function Spons() {
  const Onecards = data.map(item => {
      return (
        
          <Onecard  
          {...item}      
          
              
          />
      )
  })     
  
          
  return (
    <div>
    <Header/>
    <section className=" flex flex-wrap gap-2 px-2 lg:gap-20 md:gap-14 md:px-28 lg:px-40 bg-[#2E243C]  py-10 mx-auto">
 {Onecards}
       </section></div>
    
    
    
  )
}
 