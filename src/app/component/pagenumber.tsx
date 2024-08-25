import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center mt-20">
      <nav className="flex space-x-2 text-cyan-800">
        {/* First few page numbers */}
        <a href="#" className="px-3 py-1 border border-cyan-300 rounded-md hover:bg-cyan-50">1</a>
        <a href="#" className="px-3 py-1 border border-cyan-300 rounded-md hover:bg-cyan-50">2</a>
        {/* Ellipsis */}
        <span className="px-3 py-1">...</span>
        {/* Last page number */}
        <a href="#" className="px-3 py-1 border border-cyan-300 rounded-md hover:bg-cyan-50">12</a>
      </nav>
    </div>
  );
}

export default Pagination;
