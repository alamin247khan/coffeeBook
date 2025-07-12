
import { useLoaderData } from 'react-router-dom';

const CoffeeCard = ({ coffee }) => (
  <div className="card bg-base-100 shadow-xl">
    <figure className="h-56">
      <img
        src={coffee.image}
        alt={coffee.name}
        className="h-full w-full object-cover"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{coffee.name}</h2>
      <p className="h-10 overflow-hidden text-sm">{coffee.description}</p>
      <div className="card-actions justify-end mt-4">
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  </div>
);

const CoffeeCards = () => {
  const filteredCoffees = useLoaderData();

  if (!filteredCoffees || filteredCoffees.length === 0) {
    return <p className="mt-8 text-center">No coffees found for this category.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {filteredCoffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeCards;
