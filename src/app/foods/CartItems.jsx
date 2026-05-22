"use client";
import { CartContext } from '@/context/CartProvider';
import React, { use, useContext } from 'react'

const CartItems = () => {
  const {cart} = useContext(CartContext);
  return (
    <div>
        {cart.length} Items Added
    </div>
  )
}

export default CartItems