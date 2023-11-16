import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Models from './pages/Models';
import Container from './layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Container></Container>,
        children: [
            {
                path: '/models',
                element: <Models />,
            },
            {
                path: '/brands',
                element: <Models />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
