import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="mx-auto hidden lg:block xs:w-3/12 xs:h-128 w-3/12  bg-white p-6">
      <div className="bg-cyan-50 p-1 rounded-lg animate-fade-in">
        <h2 className="text-lg font-bold mb-2 text-center text-green-900">Filter</h2>
      </div>

      {/* Filter components */}
      <div className="mb-4">
        <label className="mt-7 block text-sm font-bold text-center text-green-900">Price</label>
        <input
          type="range"
          className="w-full mt-2 accent-cyan-600 transition-all duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="bg-gray-100 text-center p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-cyan-100">
        <button className="transform hover:scale-105 transition-all duration-300">5$</button>
        <button className="mx-1">-</button>
        <button className="transform hover:scale-105 transition-all duration-300">10$</button>
      </div>

      {/* Checkbox filters */}
      <div className="mb-4 text-green-900 mt-8">
        <label className="block text-center font-extrabold text-xl">Hersteller</label>
        <div className="flex flex-col mt-2">
          {['ADREXpharma', 'Aurora', 'Avaay', 'Bedrocan', 'Cannamedical'].map((brand, index) => (
            <label key={index} className="flex items-center mb-2 transition-all duration-300 ease-in-out transform hover:scale-105">
              <input type="checkbox" className="mr-2" />
              <span>{brand}</span>
            </label>
          ))}
          <button className="bg-white border-2 border-yellow-100 rounded p-1 transform hover:scale-105 transition-all duration-300">mehr anzeigen</button>
        </div>
        <hr className="border-t border-cyan-500 my-4 mt-8 animate-fade-in" />

        {/* THC Gehalt */}
        <div className="mb-4 mt-8">
          <label className="block text-sm font-medium text-center">THC Gehalt</label>
          <input
            type="range"
            className="w-full mt-2 accent-cyan-600 transition-all duration-300 ease-in-out hover:scale-105"
          />
          <div className="bg-gray-100 text-center p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-cyan-100">
            <button className="transform hover:scale-105 transition-all duration-300">11$</button>
            <button className="mx-1">-</button>
            <button className="transform hover:scale-105 transition-all duration-300">18$</button>
          </div>
        </div>
        <hr className="border-t border-cyan-500 my-4 mt-6 animate-fade-in" />

        {/* CBD Gehalt */}
        <div className="mb-4 mt-6">
          <label className="block text-sm font-medium text-center">CBD Gehalt</label>
          <input
            type="range"
            className="w-full mt-2 accent-cyan-600 transition-all duration-300 ease-in-out hover:scale-105"
          />
          <div className="bg-gray-100 text-center p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-cyan-100">
            <button className="transform hover:scale-105 transition-all duration-300">1$</button>
            <button className="mx-1">-</button>
            <button className="transform hover:scale-105 transition-all duration-300">5$</button>
          </div>
        </div>
        <hr className="border-t border-cyan-500 my-4 mt-6 animate-fade-in" />

        {/* Genetik */}
        <div className="mb-4 mt-6">
          <label className="block text-sm font-medium text-center">Genetik</label>
          <div className="flex justify-center mt-6">
            {['Indica', 'Sativa', 'Hybrid'].map((type, index) => (
              <button
                key={index}
                className={`w-20 mx-1 px-4 py-1 rounded transform transition-all duration-300 hover:scale-105 ${
                  type === 'Indica' ? 'bg-cyan-600 text-white' : 'bg-cyan-200 text-cyan-800'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <hr className="border-t border-cyan-500 my-4 mt-6 animate-fade-in" />

        {/* Bestrahlung */}
        <div className="mb-4 mt-6">
          <label className="block text-sm font-medium text-center">Bestrahlung</label>
          <div className="flex justify-center mt-6">
            {['bestrahlt', 'nicht bestrahlt'].map((option, index) => (
              <button
                key={index}
                className={`px-4 py-1 mx-1 rounded transform transition-all duration-300 hover:scale-105 ${
                  option === 'bestrahlt' ? 'bg-cyan-600 text-white' : 'bg-cyan-200 text-cyan-800 w-48'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
