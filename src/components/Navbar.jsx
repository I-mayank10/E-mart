import React, { useState } from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from 'react-router-dom';
const Navbar = () => {
  
    const[open,setopen]=useState(false)
    
    
      return (
        < >
    <div id='navbar' className='m-auto shadow-2xl gap-5'>
    <div className=' flex justify-between flex-wrap text-2xl  text-black shadow-gray-800  p-4 w-11/12   '>
    <div  className='flex gap-3'>
    <div className="logo">
        <FaBagShopping/>
    </div>
    <div>
        <h1>E-mart</h1>
    </div>
    
    
    </div>
    <div className=' sm:hidden text-3xl cursor-pointer ' onClick={()=>{setopen(!open)}}><h1><GiHamburgerMenu />
    </h1></div>
    {open==false &&
    <div className=' text-black basis-full sm:basis-1/2 mt-10 sm:mt-1  '>
        <ul className={`${open?'hidden':""} flex  gap-10 sm:flex-row flex-col justify-end items-center  `}   >
        <li><Link to="/">Home</Link></li>
                <li><Link to="/Shop">Shop</Link></li>
                <li><Link to="/Cart" >CART</Link></li>
                <li><Link to="/Cart" ><CgProfile /></Link></li>
                <li><Link to="/Cart" ><FaShoppingCart /></Link></li>
             </ul>
    
    
    </div>}
    </div>
      </div>
        
        
        </>
    
      )
    }
    
    export default Navbar