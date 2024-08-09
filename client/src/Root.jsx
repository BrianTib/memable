import { Suspense } from 'react';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Loading from './pages/Loading.jsx';
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            <main className="flex-grow w-full">
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}
