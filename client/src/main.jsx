import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/Error.jsx';
import Root from './Root.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Session from './pages/Session.jsx';
import Leaderboards from './pages/Leaderboards.jsx';
import TopMemes from './pages/TopMemes.jsx'; 
import HowToPlay from './pages/HowToPlay.jsx';
import './global.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
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
            {
                path: '/top-memes', 
                element: <TopMemes />,
            },
            {
                path: '/how-to-play',
                element: <HowToPlay />,
            },
            {
                path: '/session/:sessionId',
                element: <Session />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
