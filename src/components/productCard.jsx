import React, { useState } from 'react'
import StarRating from './RattingStars'
import { IoAdd } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";




const ProductCard = ({discount,productName,imgUrl,price,}) => {

  const[color,setcolor]=useState(false)





  return (
    <div   className=' bg-white flex flex-col  p-3 media  max-sm:basis-full max-md:2/3    '>
      <div className='flex justify-between align-middle  items-center p-2 '>
<div className=' bg-blue-950 text-white rounded-3xl p-2'>{discount} % Off</div>
   <FaHeart onClick={()=>setcolor(!color)}  className= {`${color?' text-red-700':'text-slate-200'} text-xl shadow-xl cursor-pointer`}  />


</div>
    <div className=' max-w-full '><img   className='  min-w-80 max-w-full  sm:h-80 h-60' src={imgUrl} alt="" /></div>
    <div className='font-bold'><h1>{productName}</h1></div>
    <div><StarRating rating='4'/></div>
    <div className='flex justify-between'>
        <p  className=' text-2xl font-bold'>${price}</p>
        <button className=' text-2xl bg-white shadow-lg rounded-xl p-1'><IoAdd />
</button>
        
    </div>




</div>

  )
}

export default ProductCard