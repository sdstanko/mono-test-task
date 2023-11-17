import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Models from './pages/Models';
import Container from './layout';
import Create from './pages/Create';

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
            {
                path: '/create',
                element: <Create />,
            },
            {
                path: '/create/:id',
                element: <Create />,
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
