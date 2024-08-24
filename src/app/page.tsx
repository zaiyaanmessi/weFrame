import Head from 'next/head';


export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Head>
        <title>Product Listing</title>
      </Head>
      
     {/* Navigation Bar */}
     <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Centered Search Bar */}
          <div className="flex-grow flex justify-center items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Suchen"
                className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
             
            </div>
          </div>
          <div className="flex space-x-4 ml-4">
            <a href="#" className="text-sm text-gray-600">Home</a>
            <a href="#" className="text-sm text-gray-600">Products</a>
            <a href="#" className="text-sm text-gray-600">About</a>
            <a href="#" className="text-sm text-gray-600">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto flex pt-6">
        
        {/* Sidebar */}
<aside className="w-1/4 p-4 bg-white">
  <div className="bg-cyan-50">
  <h2 className="text-lg font-bold mb-4 text-center text-xl text-green-900">Filter</h2>
  </div>
  {/* Add your filter components here */}
  <div className="mb-4">
    <label className="block text-sm font-bold text-center  text-green-900">Price</label>
    <input type="range" className="w-full mt-2 accent-cyan-100"/>
  </div>
  <div className="bg-gray-100 text-center">
    <button >5$</button> <button>-</button> <button>10$</button>
  </div>
  
  {/* Checkbox filters */}
  <hr className="border-t border-cyan-300 my-4" />


  <div className="mb-4  text-green-900 mt-8">
    <label className="block text-sm  text-center font-extrabold text-xl text-green-900">Herstellar</label>
    <div className="flex flex-col mt-2">
      <label className="flex items-center mb-2">
        <input type="checkbox" className="mr-2"/>
        <span>Option 1</span>
      </label>
      <label className="flex items-center mb-2">
        <input type="checkbox" className="mr-2"/>
        <span>Option 2</span>
      </label>
      <label className="flex items-center mb-2">
        <input type="checkbox" className="mr-2"/>
        <span>Option 3</span>
      </label>
      <label className="flex items-center mb-2">
        <input type="checkbox" className="mr-2"/>
        <span>Option 3</span>
      </label>
      <label className="flex items-center mb-2">
        <input type="checkbox" className="mr-2"/>
        <span>Option 3</span>
      </label>
      <button className=" border-2 border-yellow-100 rounded">mehr anzeigen</button>
      {/* Add more checkbox options as needed */}

    </div>
    <hr className="border-t border-cyan-300 my-4" />
    <div className="mb-4 mt-8">
    <label className="block text-sm font-medium text-center">THC Gehalt</label>
    <input type="range" className="w-full mt-2 accent-cyan-100"/>
  </div>
  </div>
 

</aside>

        
        {/* Product Grid */}
        <section className="w-3/4 grid grid-cols-3 gap-4 p-4">
          {/* Product Card */}
          <div className="bg-cyan-100 border rounded-lg shadow-md p-4">
            <img src="./images/medicine.png" alt="Product" className="w-full h-48 object-cover mb-4"/>
            <div className="text-sm font-bold">Cannabis Flos 18/1 PT Mango</div>
            <div className="text-xs text-gray-600">abc </div>
            <div className="text-lg font-bold mt-2">€11,66</div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">In den Warenkorb</button>
          </div>
          <div className="bg-cyan-100 border rounded-lg shadow-md p-4">
            <img src="./images/medicine.png" alt="Product" className="w-full h-48 object-cover mb-4"/>
            <div className="text-sm font-bold">Cannabis Flos 18/1 PT Mango</div>
            <div className="text-xs text-gray-600">abc </div>
            <div className="text-lg font-bold mt-2">€11,66</div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">In den Warenkorb</button>
          </div>
          <div className="bg-cyan-100 border rounded-lg shadow-md p-4">
            <img src="./images/medicine.png" alt="Product" className="w-full h-48 object-cover mb-4"/>
            <div className="text-sm font-bold">Cannabis Flos 18/1 PT Mango</div>
            <div className="text-xs text-gray-600">abc </div>
            <div className="text-lg font-bold mt-2">€11,66</div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">In den Warenkorb</button>
          </div>
          <div className="bg-cyan-100 border rounded-lg shadow-md p-4">
            <img src="./images/medicine.png" alt="Product" className="w-full h-48 object-cover mb-4"/>
            <div className="text-sm font-bold">Cannabis Flos 18/1 PT Mango</div>
            <div className="text-xs text-gray-600">abc </div>
            <div className="text-lg font-bold mt-2">€11,66</div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">In den Warenkorb</button>
          </div>
          <div className="bg-cyan-100 border rounded-lg shadow-md p-4">
            <img src="./images/medicine.png" alt="Product" className="w-full h-48 object-cover mb-4"/>
            <div className="text-sm font-bold">Cannabis Flos 18/1 PT Mango</div>
            <div className="text-xs text-gray-600">abc </div>
            <div className="text-lg font-bold mt-2">€11,66</div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">In den Warenkorb</button>
          </div>
          <div className="bg-cyan-100 border rounded-lg shadow-md p-4">
            <img src="./images/medicine.png" alt="Product" className="w-full h-48 object-cover mb-4"/>
            <div className="text-sm font-bold">Cannabis Flos 18/1 PT Mango</div>
            <div className="text-xs text-gray-600">abc </div>
            <div className="text-lg font-bold mt-2">€11,66</div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">In den Warenkorb</button>
          </div>
          <div className="bg-cyan-100 border rounded-lg shadow-md p-4">
            <img src="./images/medicine.png" alt="Product" className="w-full h-48 object-cover mb-4"/>
            <div className="text-sm font-bold">Cannabis Flos 18/1 PT Mango</div>
            <div className="text-xs text-gray-600">abc </div>
            <div className="text-lg font-bold mt-2">€11,66</div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">In den Warenkorb</button>
          </div>
          <div className="bg-cyan-100 border rounded-lg shadow-md p-4">
            <img src="./images/medicine.png" alt="Product" className="w-full h-48 object-cover mb-4"/>
            <div className="text-sm font-bold">Cannabis Flos 18/1 PT Mango</div>
            <div className="text-xs text-gray-600">abc </div>
            <div className="text-lg font-bold mt-2">€11,66</div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">In den Warenkorb</button>
          </div>
          <div className="bg-cyan-100 border rounded-lg shadow-md p-4">
            <img src="./images/medicine.png" alt="Product" className="w-full h-48 object-cover mb-4"/>
            <div className="text-sm font-bold">Cannabis Flos 18/1 PT Mango</div>
            <div className="text-xs text-gray-600">abc </div>
            <div className="text-lg font-bold mt-2">€11,66</div>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">In den Warenkorb</button>
          </div>
          {/* Add more product cards as needed */}
        </section>

      </main>
    </div>
  );
}
