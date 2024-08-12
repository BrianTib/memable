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