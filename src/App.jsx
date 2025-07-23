import { useState } from "react";
import "./index.css";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSearch = (ticker) => {
    console.log("Searching for: " + ticker);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Stock Lookup</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </>
  );
}

export default App;
