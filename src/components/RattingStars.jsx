import React from 'react';

import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < {rating}) {
      stars.push(<span  className=" text-yellow-300" key={i}>&#9733;</span>); // Full star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }
  
  return (
    <div>
      {stars}
    </div>
  );
}


export default StarRating;
