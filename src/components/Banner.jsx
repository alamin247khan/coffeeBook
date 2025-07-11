export default function Banner() {
  return (
    <div class="bg-[url(./assets/banner.jpg)] bg-no-repeat bg-cover bg-center h-screen flex flex-col items-center justify-center text-center bg-base-200 min-h-[600px]">
      <div className="bg-cover bg-center h-screen flex items-center justify-center mt-">
        <h1 className="text-white text-4xl font-bold">
          Welcome to Coffee Book
        </h1>
      </div>
      <div className="text-center my-4">
        <p className="text-white text-lg">
          Discover the best coffee blends from around the world.
        </p>
      </div>
      <div className="mb-5">
        <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
          Explore Coffees
        </button>
      </div>
    </div>
  );
}
