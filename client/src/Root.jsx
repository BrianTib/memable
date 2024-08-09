import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            <main className="flex-grow w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
