const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image Skeleton */}
        <div className="w-full h-[400px] bg-gray-300 rounded-2xl"></div>

        {/* Content Skeleton */}
        <div className="space-y-5">
          <div className="w-24 h-8 bg-gray-300 rounded-full"></div>

          <div className="w-3/4 h-10 bg-gray-300 rounded"></div>

          <div className="space-y-3">
            <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
            <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
            <div className="w-1/4 h-6 bg-gray-300 rounded"></div>
          </div>

          <div className="flex gap-4 pt-4">
            <div className="w-36 h-12 bg-gray-300 rounded-xl"></div>
            <div className="w-36 h-12 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;