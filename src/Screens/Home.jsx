import React from 'react'
import Cards from '../components/Cards'
// import StarRating from '../components/RattingStars'
import ProductCard from '../components/productCard'
import { discoutProducts } from '../assets/Data/products'

// const discoutProducts = [
  //     {
  //       id: "01",
  //       productName: "Stone and Beam Westview ",
  //       imgUrl: productImg01,
  //       category: "sofa",
  //       price: 193,
  //       discount:30,
  //       shortDesc:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
  //       description:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
  //       reviews: [
  //         {
  //           rating: 4.7,
  //           text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //         },
  //       ],
  //       avgRating: 4.5,
  //     },
  // ]
  

const Home = () => {
  return (
  <div>
    <div className=' mt-20 '>
      <Cards/>
 </div>
 <div className='bg-slate-100 mt-10 '>
<div className=' flex flex-col justify-center items-center p-5  mb-10   '>
  <h1 className=' text-3xl m-10'>Big Discount</h1>
  <div className='   justify-around flex w-2/3 m-aut0 flex-wrap flex-row md:gap-10 gap-5    ' > 
 {discoutProducts.map((item)=> <ProductCard  key={item.id} productName={item.productName} imgUrl={item.imgUrl} price={item.price} discount={item.discount} />)}
  </div>
</div>
 
 </div>
 </div>
  )
}

export default Home