import React from 'react';

const UNavbar: React.FC = () => {
  return (
    <nav className="bg-white p-8 flex items-center justify-between ">
      {/* Search Bar */}
      <div className="flex-grow max-w-lg mr-4">
        <input
          type="text"
          placeholder="Suchen...                                                                                       🔍"
          className="text-cyan-400 bg-cyan-50 placeholder-cyan-400 w-full px-3 py-1 border border-gray-300 rounded-3xl focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-9">
        <button className="text-cyan-800 hover:text-cyan-400 transition-colors duration-300 ease-in-out transform hover:scale-105">
          •Rezept einlösen
        </button>
        <button className="text-cyan-800 hover:text-cyan-400 transition-colors duration-300 ease-in-out transform hover:scale-105">
          •Live Bestand
        </button>
        <button className="text-cyan-800 hover:text-cyan-400 transition-colors duration-300 ease-in-out transform hover:scale-105">
          •Videosprechstunde
        </button>
        <button className="text-cyan-800 hover:text-cyan-400 transition-colors duration-300 ease-in-out transform hover:scale-105">
          •FAQs
        </button>
        <button className="text-cyan-800 hover:text-cyan-400 transition-colors duration-300 ease-in-out transform hover:scale-105">
          •Kontakt
        </button>
      </div>

      {/* Cart Button */}
      <div className="ml-2">
        <button className="text-gray-700 hover:text-blue-500 text-3xl transition-all duration-300 ease-in-out transform hover:scale-110">
          🛒
        </button>
      </div>
    </nav>
  );
};

export default UNavbar;
