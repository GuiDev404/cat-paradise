import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

import { GoBack } from '../components/Icons'
import Cat from '../components/Cat'
import Loading from '../components/Loading';
import placeholder from '../placeholder.png'

const Single = ({ data, FactLoading }) => {
  const { id: catID } = useParams();
  const cat = data.find(cat=> cat.id === catID);

  if(!cat) return <Loading />
  
  return (
    <>
      <Header
        title={`${cat.name || catID} Cat`}
        subtitle="Discover cats around the world"
      />
      <div className="container my-4">
        <Link to={`/#${catID}`} className="btn btn-dark rounded-0 btn-sm">
          {GoBack}
        </Link>
         
        <Cat 
          single
          img={cat.image?.url || placeholder}
          life_span={cat.life_span}
          name={cat.name}
          description={cat.description}
          origin={cat.origin}
          temperament={cat.temperament}
          wikipedia_url={cat.wikipedia_url}
          weight={cat.weight?.metric}  
        /> 
      </div>
    </>
  );
}

export default Single
