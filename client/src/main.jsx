import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root.jsx';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Leaderboards from './pages/Leaderboards.jsx';
import './global.css';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <h1 className="display-2">Wrong page!</h1>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/leaderboards',
                element: <Leaderboards />,
            }
        ],
    },

]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
