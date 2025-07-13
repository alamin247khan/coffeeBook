import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import { useState } from 'react';

const Coffees = () => {
  const data = useLoaderData();
  console.log("Loader data:", data); // Debug
  const [coffees, setCoffees] = useState(Array.isArray(data) ? data : []);

  const handleSort = (sortBy) => {
    const sorted = [...coffees]; // Copy array
    if (sortBy === 'popularity') {
      sorted.sort((a, b) => b.popularity - a.popularity); // Descending
    } else if (sortBy === 'rating') {
      sorted.sort((a, b) => a.rating - b.rating); // Ascending
    }
    setCoffees(sorted);
  };

  if (!Array.isArray(coffees)) {
    return <div>Error: Coffee data is invalid.</div>; // Graceful fallback
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-thin'>Sort Coffees</h1>
        <div className='space-x-4'>
          <button onClick={() => handleSort('popularity')} className='btn btn-warning'>
            Sort by Popularity (DSC)
          </button>
          <button onClick={() => handleSort('rating')} className='btn btn-warning'>
            Sort by Rating (ASC)
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
        {coffees.length > 0 ? (
          coffees.map((coffee) => <Card key={coffee.id} coffee={coffee} />)
        ) : (
          <p>No coffees found.</p> // Handle empty state
        )}
      </div>
    </>
  );
};

export default Coffees;
