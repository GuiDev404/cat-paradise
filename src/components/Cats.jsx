import React from 'react'
import Cat from './Cat'
import placeholder from '../placeholder.png'

const Cats = ({ data }) => {

  return (
    <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
      {data.map((cat, idx) => (
        <Cat
          key={`${cat.id}_${cat.name}`}
          img={cat.image?.url || placeholder}
          id={cat.id}
          life_span={cat.life_span}
          name={cat.name}
          description={cat.description}
          origin={cat.origin}
          temperament={cat.temperament}
          wikipedia_url={cat.wikipedia_url}
          weight={cat.weight?.metric || cat.weight?.imperial} 
        />
      ))}
    </div>
  );
}

export default Cats
