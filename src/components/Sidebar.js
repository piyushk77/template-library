import React from 'react';

function Sidebar({ categories }) {
  return (
    <>
      {categories.map(category => (
        <div key={category.id} className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{category.title}</h5>
              <p className="card-text">{category.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Sidebar;
