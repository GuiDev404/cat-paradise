import React from 'react'
import Header from '../components/Header'
import { useQueryClient, useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

import { GoBack } from '../components/Icons'
import Cat from '../components/Cat'
import { getCatBySearch } from '../services/cats.services'

const Single = () => {
  const { id: catID } = useParams();
  const queryClient = useQueryClient();
  const oldCategories = queryClient.getQueryData('cats') || [];

  const catRedirected = oldCategories.find(cat=> cat.id === catID);

  const { data, isLoading } = useQuery(['cat', catID], () => getCatBySearch(catID) , {
    enabled: !Boolean(catRedirected),
    staleTime: Infinity,
    refetchOnWindowFocus: false
  });

  const cat = catRedirected || (!isLoading ? data[0] : {breeds: []}) || [];

  return (
    <>
      <Header
        title={`${cat.name || cat?.breeds[0]?.name || catID} Cat`}
        subtitle="Discover cats around the world"
      />
      <div className="container my-4">
        <Link to={`/#${catID}`} className="btn btn-dark rounded-0 btn-sm">
          {GoBack}
        
        </Link>
         
        <Cat 
          single
          img={cat.image?.url || cat?.url}
          life_span={cat.life_span || cat?.breeds[0]?.life_span || ''}
          name={cat.name || cat?.breeds[0]?.name || ''}
          description={cat.description || cat?.breeds[0]?.description || ''}
          origin={cat.origin || cat?.breeds[0]?.origin || ''}
          temperament={cat.temperament || cat?.breeds[0]?.temperament || ''}
          wikipedia_url={cat.wikipedia_url || cat?.breeds[0]?.wikipedia_url || ''}
          weight={cat.weight?.metric || cat?.breeds[0]?.weight.metric || ''}  
        /> 
      </div>
    </>
  );
}

export default Single
