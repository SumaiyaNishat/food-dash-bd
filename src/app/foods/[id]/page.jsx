import React from "react";
import Link from "next/link";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );

  const data = await res.json();
  return data.details;
};

const Page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <h2 className="text-3xl font-bold text-red-500">Food Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Food Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={food.foodImg}
            alt={food.title}
            className="object-cover"
          />
        </div>

        {/* Food Details */}
        <div className="space-y-5">
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            {food.category}
          </span>

          <h1 className="text-4xl font-bold text-gray-800">{food.title}</h1>

          <div className="space-y-2 text-lg text-gray-600">
            <p>
              <span className="font-semibold">Category:</span> {food.category}
            </p>

            <p>
              <span className="font-semibold">Area:</span> {food.area}
            </p>

            <p>
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-orange-500 font-bold">৳ {food.price}</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Link
              href={food.video}
              target="_blank"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition"
            >
              Watch Recipe
            </Link>

            <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
