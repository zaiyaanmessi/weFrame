import React from 'react';

const Breadcrumbs: React.FC = () => {
  const items = [
    { label: 'Home' },
    { label: 'Livebestand' },
    { label: 'Cannabis Blüten' },
  ];

  return (
    <nav className="bg-white p-2 rounded-md mt-9">
      <ol className="flex space-x-2 text-cyan-300">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index < items.length - 1 ? (
              <>
                <span className="text-cyan-500 hover:text-cyan-900">{item.label}</span>
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </>
            ) : (
              <span className="text-cyan-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
