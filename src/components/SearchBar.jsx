import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [ticker, setTicker] = useState("");

  const handleSearch = () => {
    if (!ticker.trim()) return;
    onSearch(ticker.trim().toUpperCase());

    setTicker("");
  };

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter ticker (e.g. AAPL)"
        className="flex-1 p-2 rounded bg-gray-700 text-white placeholder-gray-400"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}
