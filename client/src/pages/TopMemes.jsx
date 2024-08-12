import React, { useState } from 'react';

const TopMemes = () => {
  const [filter, setFilter] = useState('day');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    // You can also add logic here to fetch or filter the memes based on the selected filter
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Main Content */}
      <main className="px-5 py-10">
        <h2 className="text-3xl font-bold text-center">Top Memes</h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Explore the funniest memes from today, this week, this month, and this year!
        </p>
         {/* Filters for Day, Week, Month, Year */}
         <div className="flex justify-center mb-8">
          <button 
            className={`px-4 py-2 mx-2 rounded ${filter === 'day' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
            onClick={() => handleFilterChange('day')}
          >
            Day
          </button>
          <button 
            className={`px-4 py-2 mx-2 rounded ${filter === 'week' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
            onClick={() => handleFilterChange('week')}
          >
            Week
          </button>
          <button 
            className={`px-4 py-2 mx-2 rounded ${filter === 'month' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
            onClick={() => handleFilterChange('month')}
          >
            Month
          </button>
          <button 
            className={`px-4 py-2 mx-2 rounded ${filter === 'year' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
            onClick={() => handleFilterChange('year')}
          >
            Year
          </button>
          </div>

{/* Meme Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Placeholder for dynamic content */}
  <div className="bg-gray-100 p-5 rounded shadow-md">
            <img src="meme1.png" alt="Meme 1" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">Meme Title 1</h3>
            <p className="text-gray-600">500 Votes</p>
          </div>
          <div className="bg-gray-100 p-5 rounded shadow-md">
            <img src="meme2.png" alt="Meme 2" className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">Meme Title 2</h3>
            <p className="text-gray-600">350 Votes</p>
          </div>
          {/* Add more meme cards here */}
        </div>
      </main>