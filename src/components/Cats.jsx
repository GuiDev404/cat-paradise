import React from 'react'
import { useQuery } from 'react-query'
import { getSum, sanitazeResult } from '../helpers'
import placeholder from '../placeholder.png'
import { getAllCats } from '../services/cats.services'

import Cat from './Cat'
import Loading from './Loading'

const Cats = () => {
  const { isLoading, isError, isFetching, data } = useQuery('cats', getAllCats, { 
    staleTime: Infinity
  })

  if(isLoading || isFetching) return <Loading />

  if(isError) return <div className='text-danger my-4 lead text-center'> Algo salio mal... </div>

  if(!isLoading && data && data.length){
    const calcSumLifeSpan = data.reduce((acc, cat)=> getSum(acc, cat.life_span), 0);
    const calcSumWeight = data.reduce((acc, cat)=> getSum(acc, cat.weight.metric), 0);
    
    const averageYears = sanitazeResult(calcSumLifeSpan / data.length);
    const averageWeight = sanitazeResult(calcSumWeight / data.length);
    localStorage.setItem('averages', JSON.stringify({ averageYears, averageWeight }))
  }
  
  return (
    <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
      {data.map((cat) => (
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
