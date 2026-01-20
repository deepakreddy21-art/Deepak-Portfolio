export const LoadingSkeleton = ({ isDarkMode, type = "card" }) => {
  if (type === "card") {
    return (
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg border shadow-md p-6 animate-pulse`}>
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-3/4 mb-4`}></div>
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-full mb-2`}></div>
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-5/6 mb-4`}></div>
        <div className="flex gap-2">
          <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full w-20`}></div>
          <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full w-24`}></div>
        </div>
      </div>
    );
  }

  if (type === "text") {
    return (
      <div className="animate-pulse space-y-3">
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-3/4`}></div>
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-full`}></div>
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-5/6`}></div>
      </div>
    );
  }

  return null;
};
