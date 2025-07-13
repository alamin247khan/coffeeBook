import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
  // Check if categories is an array before mapping
  if (!Array.isArray(categories)) {
    console.error("Expected 'categories' to be an array, got:", categories);
    return null; // or a fallback UI
  }

  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab text-2xl font-thin ${isActive ? 'tab-active' : ''}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
