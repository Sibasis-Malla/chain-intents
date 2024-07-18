import React from "react";
import Navbar from "../components/Navbar";
function HomePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-purple-100 flex flex-col items-center py-10">
      <div className="w-full max-w-3xl">
        <header className="flex justify-between items-center mb-6">
        </header>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
          <h1 className="text-2xl font-semibold text-center">Neo</h1>
          <div className="mt-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enter an intent you want to execute
            </label>
            <div className="flex">
              <input
                type="text"
                className="flex-1 px-3 py-2 border rounded-l-lg focus:outline-none"
                placeholder="Send 100 USDC to 0x5Dc9C45Fbd38910b84D789C53b1269779abC4e36"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-lg">
                Execute Intent
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Intent Suggestions</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Swap</h3>
              <p>I want to swap 1 WMATIC for 1 USDC</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Swap</h3>
              <p>I want to swap 1 WMATIC for USDC</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Borrow</h3>
              <p>I want to borrow 10 USDT from AAVE</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Repay</h3>
              <p>I want to repay 5 USDT against my borrowing from AAVE</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Send</h3>
              <p>Transfer funds from your wallet to another address</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Bridge</h3>
              <p>I want to bridge 0.01 WETH from Polygon Mumbai to Sepolia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HomePage;
