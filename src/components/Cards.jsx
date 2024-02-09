import React from 'react'
import { serviceData } from '../assets/Data/products'


const Cards = () => {
  return (
    <div className='  flex  m-auto flex-wrap  justify-center  gap-1 '>
      { serviceData.map((item)=>( 

      <div style={{background:`${item.bg}`}}  className="   text-2xl box flex flex-col justify-center items-center gap-7 p-10  overflow-hidden">
        <div className='bg-white  rounded-3xl  p-4'>{item.icon}</div>
        <h1 className=' font-bold'>{item.title}</h1>
        <p>{item.subtitle}</p>


        </div>
 ))}



    </div>
  )
}

export default Cards