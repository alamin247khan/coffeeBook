import { NavLink } from 'react-router-dom';

export default function Categories({ categories }) {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.slug}`}
            role="tab"
            className={({ isActive }) => (isActive ? 'tab tab-active' : 'tab')}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
