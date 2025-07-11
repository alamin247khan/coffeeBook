import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import categoriesData from '../Data/Categories.json';
import Home from '../pages/Home.jsx';
import Coffees from '../pages/Coffees.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import CoffeeCards from '../components/CoffeeCards.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>Error loading page</div>,
    children: [
      {
        element: <Home />,
        loader: async () => categoriesData,
        children: [
          {
            index: true,
            element: <div className="ml-8"><p>Please select a category.</p></div>,
          },
          {
            path: 'category/:category',
            element: <CoffeeCards />,
          },
        ],
      },
      {
        path: 'coffees',
        element: <Coffees />,
      },
      {
        path: 'dashboard/:category',
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
