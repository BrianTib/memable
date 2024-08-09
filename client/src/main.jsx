import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';
import Root from './Root.jsx';

// Pages
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';


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
                path: 'login',
                element: <Login />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
