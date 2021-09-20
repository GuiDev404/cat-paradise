import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Cat from '../components/Cat';
import Header from '../components/Header';
import { GoBack } from '../components/Icons';
import Loading from '../components/Loading';

import placeholder from '../placeholder.png';
import { getCatBySearch } from '../services/cats.services';

const Single = () => {
  const { id: catID } = useParams();
  const queryClient = useQueryClient();
  const oldCats = queryClient.getQueryData('cats') || [];

  const cat = oldCats.find(cat=> cat.id === catID);

  const { data: catByID, isLoading } = useQuery(['cat', catID], () => getCatBySearch(catID) , {
    enabled: !Boolean(cat),
    staleTime: Infinity,
    refetchOnWindowFocus: false
  });

  if(!cat && isLoading) return <Loading />

  return (
    <>
      <Header
        title={`${cat?.name || catByID[0].breeds[0].name || catID} Cat`}
        subtitle="Discover cats around the world"
      />
      <div className="container my-4">
        <Link to={`/#${catID}`} className="btn btn-dark rounded-0 btn-sm">
          {GoBack}
        </Link>
         
        <Cat 
          single
          img={cat?.image?.url || catByID[0]?.url || placeholder}
          life_span={cat?.life_span || catByID[0].breeds[0].life_span}
          name={cat?.name || catByID[0].breeds[0].name}
          description={cat?.description || catByID[0].breeds[0].description}
          origin={cat?.origin || catByID[0].breeds[0].origin}
          temperament={cat?.temperament || catByID[0].breeds[0].temperament}
          wikipedia_url={cat?.wikipedia_url || catByID[0].breeds[0]?.wikipedia_url}
          weight={cat?.weight?.metric || catByID[0].breeds[0].weight.metric}  
        /> 
      </div>
    </>
  );
}

export default Single
