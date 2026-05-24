"use client";

import { Heart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ReviewCard = ({ review }) => {
  const [liked, setLiked] = useState(false);

  const [likesCount, setLikesCount] = useState(
    review?.likes?.length || 0
  );

  const handleLike = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1);
    } else {
      setLikesCount((prev) => prev + 1);
    }

    setLiked(!liked);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition duration-300">
      
      {/* User */}
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14">
          {/* <img
            src={review.photo}
            alt={review.user}
            fill
            className="rounded-full object-cover"
          /> */}
          <Image src={review.photo}
            alt={review.user}
            // fill
            className="rounded-full object-cover" width={56} height={56}/>
        </div>

        <div>
          <h2 className="font-bold text-lg text-gray-800">
            {review.user}
          </h2>

          <p className="text-sm text-gray-500">
            {review.email}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-4">
        {[...Array(review.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 leading-relaxed mt-4">
        {review.review}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-400">
          {new Date(review.date).toLocaleDateString()}
        </p>

        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${
            liked
              ? "bg-red-100 text-red-500"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <Heart
            size={18}
            className={liked ? "fill-red-500" : ""}
          />

          <span>{likesCount}</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;