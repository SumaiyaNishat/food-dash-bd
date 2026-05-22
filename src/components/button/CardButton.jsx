"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use, useContext, useState } from 'react'

const CardButton = ({food}) => {
  const [inCart, setInCart] = useState(false);
  // const handleAddToCart = () =>{
  //   setInCart(true);
  // }

  const {addToCart} = useContext(CartContext);
  const handleAddToCart = () =>{
    addToCart(food);
    setInCart(true);
  }
  return (
     <button
            onClick={handleAddToCart}
            disabled={inCart}
            className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 disabled:bg-gray-100 disabled:text-gray-500 transition"
          >
           {
            inCart ? "Added" : " Add to Cart"
           }
          </button>
  )
}

export default CardButton;