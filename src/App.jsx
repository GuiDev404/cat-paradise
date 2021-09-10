import React from 'react'
import { useQuery } from 'react-query'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Single from './pages/Single';
import Loading from './components/Loading'

import { getAllCats } from './services/cats.services'
import { getSum, sanitazeResult } from './helpers'

function App() {
  const { isLoading, isError, isFetching, data, error } = useQuery('cats', getAllCats, { 
    staleTime: Infinity
  })

  if(isLoading || isFetching) return <Loading />

  if(isError) return <div className='text-danger my-4 lead text-center'> Algo salio mal... </div>

  if(!isLoading && data && data.length){
    const NUMBER_OF_CATS = data.length;
    const calcSumLifeSpan = data.reduce((acc, cat)=> getSum(acc, cat.life_span), 0);
    const calcSumWeight = data.reduce((acc, cat)=> getSum(acc, cat.weight.metric), 0);
    
    const averageYears = sanitazeResult(calcSumLifeSpan / NUMBER_OF_CATS);
    const averageWeight = sanitazeResult(calcSumWeight / NUMBER_OF_CATS);
    localStorage.setItem('averages', JSON.stringify({ averageYears, averageWeight }))
  }

  return (
    <Router>
      <Switch>
        <Route path="/:id" component={()=> <Single data={data} />} />
        <Route path='/' component={()=> <Home data={data} />} />
      </Switch>
    </Router>
  );
}

export default App
