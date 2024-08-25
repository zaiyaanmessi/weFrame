import React from 'react';

// ProductCard Component
const ProductCard: React.FC = () => {
  return (
    <div className="bg-white border-4 border-cyan-300 rounded-xl shadow-md p-4 flex flex-col items-center relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Availability Badge */}
      <div className="absolute top-2 left-2 bg-red-100 text-red-600 text-xs font-semibold rounded-full px-2 py-1">
        • nicht lieferbar
      </div>

      {/* Product Image */}
      <img src="./images/prod.png" alt="Product" className="w-26 h-28 object-cover mb-2" />

      {/* Product Info */}
      <div className="bg-cyan-50 p-5 w-full rounded-lg">
        <div className="text-xs font-semibold text-cyan-600 mb-1">Canify</div>
        <div className="flex justify-between text-xs mb-2">
          <div className="bg-white px-2 py-1 rounded-lg shadow text-center text-cyan-800">THC 18%</div>
          <div className="bg-white px-2 py-1 rounded-lg shadow text-center text-cyan-800">CBD 1%</div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11c0 1.657 1.343 3 3 3s3-1.343 3-3zM18 11c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3z" />
            </svg>
          </div>
        </div>
        <div className="text-sm font-bold mb-1 text-cyan-800">Cannabis Flos 18/1 PT Mango</div>
        <div className="text-xs text-gray-600 flex justify-between">
          <span>Kultivar</span>
          <span>Mango</span>
        </div>
        <div className="text-xs text-gray-600 flex justify-between">
          <span>Genetik</span>
          <span>Hybrid</span>
        </div>

      {/* Price and Button */}
      <div className="flex justify-between items-center w-full mt-3">
        <div className="text-lg font-bold text-cyan-800">€11,66</div>
        <button className="bg-lime-200 text-cyan-900 px-3 py-1 rounded-md transform transition-colors duration-300 hover:bg-lime-300 hover:text-cyan-700">
          in den Warenkorb
        </button>
      </div>
    </div>
    </div>
  );
};

// ProductCard2 Component
const ProductCard2: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center relative transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Availability Badge */}
      <div className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs font-semibold rounded-full px-2 py-1">
        • sofort lieferbar
      </div>
      <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs font-semibold rounded-full px-2 py-1">
        Neu
      </div>

      {/* Product Image */}
      <img src="./images/prod.png" alt="Product" className="w-26 h-28 object-cover mb-2" />

      {/* Product Info */}
      <div className="bg-cyan-50 p-5 w-full rounded-lg">
        <div className="text-xs font-semibold text-cyan-600 mb-1">Canify</div>
        <div className="flex justify-between text-xs mb-2">
          <div className="bg-white px-2 py-1 rounded-lg shadow text-center text-cyan-800">THC 18%</div>
          <div className="bg-white px-2 py-1 rounded-lg shadow text-center text-cyan-800">CBD 1%</div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11c0 1.657 1.343 3 3 3s3-1.343 3-3zM18 11c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3z" />
            </svg>
          </div>
        </div>
        <div className="text-sm font-bold mb-1 text-cyan-800">Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify</div>
        <div className="text-xs text-gray-600 flex justify-between">
          <span>Kultivar</span>
          <span>Mango</span>
        </div>
        <div className="text-xs text-gray-600 flex justify-between">
          <span>Genetik</span>
          <span>Hybrid</span>
        </div>

      {/* Price and Button */}
      <div className="flex justify-between items-center w-full mt-3">
        <div className="text-lg font-bold text-cyan-800">€11,66</div>
        <button className="bg-lime-200 text-cyan-900 px-3 py-1 rounded-md transform transition-colors duration-300 hover:bg-lime-300 hover:text-cyan-700">
          in den Warenkorb
        </button>
      </div>
    </div>
    </div>
  );
};

// Product Component
const Product: React.FC = () => {
  return (
    <section className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard2 />
      <ProductCard2 />
      <ProductCard2 />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      {/* Add more <ProductCard /> as needed */}
    </section>
  );
};

export default Product;
