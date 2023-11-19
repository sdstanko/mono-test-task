import { createBrowserRouter } from 'react-router-dom';
import Models from '../pages/Models';
import Makes from '../pages/Makes';
import Container from '../layout';
import Create from '../pages/Create';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Container></Container>,
        children: [
            {
                path: '/',
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

export default router;
