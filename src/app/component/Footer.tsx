// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-700 text-white py-16 mt-14">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold">• Rezept einlösen</p>
            <br />
            <p className="text-sm font-semibold">• Videosprechstunde</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-400">Standort</p>
            <br />
            <p className="text-sm font-semibold">Bergstraße 49 - 57 <br />69469 Weinheim(3 Glocken Quartier)</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-400">Telefon</p>
            <br />
            <p className="text-sm font-semibold">0223 545 5250</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-400">Öffnungszeiten</p>
            <br />
            <p className="text-sm font-semibold text-gray-400">Mo-Fr</p>
            <br />
            <p className="text-sm font-semibold">09:00 – 18:00 Uhr</p>
          </div>
          
            
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
