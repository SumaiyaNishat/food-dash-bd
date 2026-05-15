"use client";

import Link from "next/link";
import React from "react";

const FoodCard = ({ food, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {food.title}
        </h2>

        <p className="text-sm text-gray-500">
          {food.category}
        </p>

        {/* Price */}
        <div className="mt-2 text-xl font-bold text-orange-500">
          ৳ {food.price}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          
          <button
            onClick={() => onAddToCart(food)}
            className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Add to Cart
          </button>

          <Link
            href={`/foods/${food.id}`}
            className="flex-1 text-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            View Details
          </Link>

        </div>
      </div>
    </div>
  );
};

export default FoodCard;