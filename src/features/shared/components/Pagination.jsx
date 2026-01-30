import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
   if (totalPages <= 1) return null;

   return (
      <div className="flex justify-center space-x-2 mt-4">
         {Array.from({ length: totalPages }, (_, i) => (
            <button
               key={i + 1}
               onClick={() => onPageChange(i + 1)}
               className={`px-3 py-1 rounded border ${i + 1 === currentPage ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                  }`}
            >
               {i + 1}
            </button>
         ))}
      </div>
   );
};

export default React.memo(Pagination);