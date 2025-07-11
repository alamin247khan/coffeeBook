import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className="bg-[url(./assets/banner.jpg)] bg-no-repeat bg-cover bg-center min-h-[600px] flex flex-col items-center justify-center text-center text-white p-4">
      <h1 className="text-4xl font-bold">
        Welcome to Coffee Book
      </h1>
      <p className="text-lg my-4">
        Discover the best coffee blends from around the world.
      </p>
      <Link to="/coffees">
        <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
          Explore Coffees
        </button>
      </Link>
    </div>
  );
}
