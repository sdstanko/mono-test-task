import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Models from './pages/Models';
import Container from './layout';

const router = createBrowserRouter([
    {
        path: '/models',
        element: <Models />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Container>
            <RouterProvider router={router} />
        </Container>
    </React.StrictMode>,
);
