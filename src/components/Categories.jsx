import React from 'react';
import { Link } from 'react-router-dom';

export default function Categories({Categories}) {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lift">
        {Categories.map((category) => (<Link key={category.category} to='/cards' role="tab" className="tab"> 
          {category.category }
        </Link>))}
        
      </div>
    </div>
  );
}
