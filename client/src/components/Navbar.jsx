import React from 'react';

function Navbar() {
  return (
    <nav className="bg-black py-6 px-8 flex justify-between items-center">
      <a href="/" className="text-white font-bold text-3xl" style={{ marginLeft: '20px', fontFamily: 'Roboto, sans-serif' }}>Donna</a>
      <button
        className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:bg-gradient-to-br from-teal-700 to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-xl"
      >
        Connect Wallet
      </button>
    </nav>
  );
}

export default Navbar;
