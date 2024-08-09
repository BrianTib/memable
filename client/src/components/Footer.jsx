import React from 'react';

export default function Component() {
  return (
 <footer className="bg-white text-gray-600 py-2">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <p className="text-sm mb-2 md:mb-0">&copy; 2024 Memable. All rights reserved.</p>
    <div className="text-sm flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
      <a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a>
      <a href="#" className="text-gray-600 hover:text-black">Terms of Service</a>
    </div>
  </div>
</footer>
  );
}
