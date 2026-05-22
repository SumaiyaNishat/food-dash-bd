const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 animate-pulse">
      
      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gray-300"></div>

        <div className="space-y-2">
          <div className="w-40 h-4 bg-gray-300 rounded"></div>
          <div className="w-28 h-3 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-2 mt-4">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-5 h-5 rounded bg-gray-300"
          ></div>
        ))}
      </div>

      {/* Review Text */}
      <div className="space-y-3 mt-5">
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>

        <div className="w-20 h-10 bg-gray-300 rounded-xl"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;