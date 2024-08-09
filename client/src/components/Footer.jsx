import React from 'react';

export default function Component() {
  return (
    <footer className="bg-white text-gray-600 py-6">
  <div className="mx-auto flex md:flex-col justify-between items-center">
    <p className="text-sm">&copy; 2024 Memable. All rights reserved.</p>
    <div className="text-sm flex md:flex-col space-x-4">
      <a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a>
      <a href="#" className="text-gray-600 hover:text-black">Terms of Service</a>
    </div>
  </div>
</footer>
  );
}
