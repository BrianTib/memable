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