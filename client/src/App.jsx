import React from 'react';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<header>
				<Navbar />
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
