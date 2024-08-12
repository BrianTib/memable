import React, { useState, useEffect } from 'react';

const TopMemes = () => {
  const [filter, setFilter] = useState('day');
  const [memes, setMemes] = useState([]);

 // Example meme data (In a real app, this data would come from an API or a database)
 const memeData = {
    day: [
      { id: 1, title: 'When your friend suggests a crazy idea, and you’re actually considering it.', votes: 505, image: '/gifs/idea.gif' },
      { id: 2, title: 'When you say "I’ll start tomorrow", but tomorrow never comes.', votes: 492, image: '/gifs/tmr.gif' },
      { id: 3, title: 'When your favorite song comes on, and you’re in public, trying not to dance.', votes: 290, image: '/gifs/dance.gif' },
    ],
    week: [
      { id: 4, title: 'When you walk into a spider web and start doing ninja moves in public.', votes: 809, image: '/gifs/spider web.gif' },
      { id: 5, title: 'When you try to take a cute selfie, but the camera flips to front-facing.', votes: 710, image: '/gifs/selfie.gif' },
      { id: 6, title: 'When you’re hungry, but too lazy to cook, so you just stare into the fridge.', votes: 590, image: '/gifs/fridge.gif' },
    ],
    month: [
      { id: 7, title: 'When someone spoils the ending of a movie you were planning to watch.', votes: 1201, image: '/gifs/spoils.gif' },
      { id: 8, title: 'When you wake up from a nap and don’t know what year it is.', votes: 1003, image: '/gifs/sleep.gif' },
      { id: 9, title: 'When you realize you’ve been talking for 10 minutes and no one was listening.', votes: 982, image: '/gifs/not-listending.gif' },
    ],
    year: [
      { id: 10, title: 'When you have already explained something three times, and they still dont get it.', votes: 2003, image: '/gifs/explain.gif' },
      { id: 11, title: 'When you try to be productive, but Netflix has other plans.', votes: 1942, image: '/gifs/netfliex.gif' },
      { id: 12, title: 'When you accidentally open a text from someone you were trying to avoid.', votes: 1571, image: '/gifs/text.gif' },
    ],
  };

  // Initialize memes with the default filter's data
  useEffect(() => {
    setMemes(memeData[filter]);
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Main Content */}
      <main className="flex-grow px-5 py-10">
        <h2 className="text-3xl font-bold text-center">Top Memes</h2>
        <p className="text-center text-lg text-gray-600 mb-10">
          Explore the funniest memes from today, this week, this month, and this year!
        </p>

        {/* Filters for Day, Week, Month, Year */}
        <div className="flex justify-center mb-8">
  <button
    className={`px-4 py-2 mx-2 rounded-lg font-bold border border-transparent ${
      filter === 'day' ? 'bg-[rgb(85,136,58)] text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
    }`}
    onClick={() => handleFilterChange('day')}
  >
    Day
  </button>
  <button
    className={`px-4 py-2 mx-2 rounded-lg font-bold border border-transparent ${
      filter === 'week' ? 'bg-[rgb(85,136,58)] text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
    }`}
    onClick={() => handleFilterChange('week')}
  >
    Week
  </button>
  <button
    className={`px-4 py-2 mx-2 rounded-lg font-bold border border-transparent ${
      filter === 'month' ? 'bg-[rgb(85,136,58)] text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
    }`}
    onClick={() => handleFilterChange('month')}
  >
    Month
  </button>
  <button
    className={`px-4 py-2 mx-2 rounded-lg font-bold border border-transparent ${
      filter === 'year' ? 'bg-[rgb(85,136,58)] text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
    }`}
    onClick={() => handleFilterChange('year')}
  >
    Year
  </button>
</div>

        {/* Meme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memes.map((meme) => (
            <div key={meme.id} className="bg-gray-100 p-5 rounded shadow-md">
              <img src={meme.image} />
              <h3 className="text-xl font-semibold mb-2">{meme.title}</h3>
              <p className="text-gray-600">{meme.votes} Votes</p>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default TopMemes;
