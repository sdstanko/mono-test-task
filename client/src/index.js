import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Models from './pages/Models';
import Makes from './pages/Makes';
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
                path: '/makes',
                element: <Makes />,
            },
            {
                path: '/create/makes',
                element: <Create />,
            },
            {
                path: '/create/models',
                element: <Create />,
            },
            {
                path: '/create/models/:id',
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
