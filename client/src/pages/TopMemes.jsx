import React, { useState } from 'react';

const TopMemes = () => {
  const [filter, setFilter] = useState('day');
  const [memes, setMemes] = useState([]);

  // Example meme data (In a real app, this data would come from an API or a database)
  const memeData = {
    day: [
      { id: 1, title: 'Day Meme 1', votes: 500, image: 'meme1.png' },
      { id: 2, title: 'Day Meme 2', votes: 350, image: 'meme2.png' },
    ],
    week: [
      { id: 3, title: 'Week Meme 1', votes: 800, image: 'meme3.png' },
      { id: 4, title: 'Week Meme 2', votes: 650, image: 'meme4.png' },
    ],
    month: [
      { id: 5, title: 'Month Meme 1', votes: 1200, image: 'meme5.png' },
      { id: 6, title: 'Month Meme 2', votes: 950, image: 'meme6.png' },
    ],
    year: [
      { id: 7, title: 'Year Meme 1', votes: 2000, image: 'meme7.png' },
      { id: 8, title: 'Year Meme 2', votes: 1800, image: 'meme8.png' },
    ],
  };

  // Update memes when filter changes
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setMemes(memeData[newFilter]);
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
          {memes.map((meme) => (
            <div key={meme.id} className="bg-gray-100 p-5 rounded shadow-md">
              <img src={meme.image} alt={meme.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">{meme.title}</h3>
              <p className="text-gray-600">{meme.votes} Votes</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-5 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Memable. All rights reserved.</p>
        <p>
          <a href="#" className="hover:underline">Privacy Policy</a> | 
          <a href="#" className="hover:underline">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default TopMemes;
