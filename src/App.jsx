

import React from 'react'
import data from './data1.jsx'
import Onecard from './components/onecard.jsx'
import Header from './components/header.jsx'





    
export default function App() {
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
 