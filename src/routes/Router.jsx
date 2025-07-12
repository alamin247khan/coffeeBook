import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
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
        path: '/',
        element: <Home />,
        loader: () => fetch('/Data/categories.json'),
        children: [
          {
            index: true,
            element: (
              <div className="mt-8 text-center">
                <p>Select a category to start exploring our coffees!</p>
              </div>
            ),
          },
          {
            path: 'category/:slug',
            element: <CoffeeCards />,
            loader: async ({ params }) => {
              const [coffeesRes, categoriesRes] = await Promise.all([
                fetch('/Data/coffees.json'),
                fetch('/Data/categories.json'),
              ]);

              const coffees = await coffeesRes.json();
              const categories = await categoriesRes.json();

              const currentCategory = categories.find(
                (cat) => cat.slug === params.slug,
              );

              return coffees.filter(
                (coffee) => coffee.category === currentCategory?.category,
              );
            },
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
