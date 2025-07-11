import Banner from '../components/Banner.jsx';
import Heading from '../components/Heading.jsx';
import Categories from '../components/Categories.jsx';
import { Outlet, useLoaderData } from 'react-router-dom';

export default function Home() {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      <Banner />
      <div className="my-10 max-w-[1200px] mx-auto px-4">
        <div className="mb-10">
          <Heading
            title="Welcome to Coffee Book"
            subtitle="This is a subtitle"
          />
        </div>
        <div className="mb-8 flex justify-center flex-col items-center text-center">
          <Categories categories={categories} />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
