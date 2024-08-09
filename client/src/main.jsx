import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
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
                path: '/login',
                element: <Login />,
            },
            {
                path: '/leaderboards',
                element: <Leaderboards />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
