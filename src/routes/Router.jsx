import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import Home from '../pages/Home.jsx';
import Coffees from '../pages/Coffees.jsx';
import Dashboard from '../pages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>Error loading page</div>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('../Data/Categories.json'),
      },
      {
        path: '/coffees',
        element: <Coffees />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
