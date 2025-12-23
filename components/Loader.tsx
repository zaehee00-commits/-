
import React from 'react';

const Loader: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-t-4 border-t-cyan-400 border-gray-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-cyan-300 text-lg font-semibold">{message}</p>
    </div>
  );
};

export default Loader;
