import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white  p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Left Image */}
          <div className="flex items-center">
            <a href="#">
              <img src="./images/logo.png" alt="Logo" className="h-10 w-32 object-cover" />
            </a>
          </div>

          {/* Centered Search Bar */}
          <div className="flex-grow max-w-lg mr-4">
        <input
          type="text"
          placeholder="Suchen...                                                                                       🔍"
          className="text-cyan-400 bg-gray-100 placeholder-cyan-400  w-full px-3 py-1 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-500"
        />
      </div>

         {/* Right Dropdown and Toggle Button */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          {/* Dropdown Menu */}
          <button className="text-sm bg-cyan-100 text-cyan-800 px-4 py-2 border border-cyan-400  hover:bg-cyan-500">
          Sortieren nach
          </button>

          {/* Toggle Button */}
          <button className="text-sm bg-cyan-100 text-cyan-800 px-4 py-2 border border-cyan-400  hover:bg-cyan-500">
          Verfügbarkeit
          </button>
        </div>
      </div>
      </nav>
  )
}

export default Navbar