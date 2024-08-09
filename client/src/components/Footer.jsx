import React from 'react';

export default function Component() {
    return (
        <footer className="bg-white text-gray-600 py-4">
            <div className="container mx-auto px-4 flex flex-col items-center sm:flex-row sm:justify-between">
                <p className="text-sm mb-4 sm:mb-0">&copy; 2024 Memable. All rights reserved.</p>
                <div className="text-sm flex flex-row space-x-4 sm:space-x-6">
                    <a href="#" className="hover:text-black transition duration-300">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-black transition duration-300">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
