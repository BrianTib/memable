import React from 'react';
import Footer from './footer/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        {/* Your header content */}
      </header>
      <main className="flex-grow w-full">
        {/* Your main content */}
        <div className="text-4xl text-center bg-red-500">Hello world!</div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
