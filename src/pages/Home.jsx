
import Banner from '../components/Banner.jsx'
import Heading from '../components/Heading.jsx'
import Categories from '../components/Categories.jsx';

export default function Home () {
  // eslint-disable-next-line no-undef
  const categories = useLoaderData(); // Assuming you are using useLoaderData to fetch categories
  console.log(categories);
  return (
    <div>
      <div className="my-10 max-w-[1200px] mx-auto">
        <Banner />
      </div>
      <div className="my-10">
        <Heading title="Welcome to Coffee Book" subtitle="This is a subtitle" />
      </div>
      <div className="my-10">
        <Categories Categories={categories} />
      </div>
    </div>
  );
}

