import React from 'react'
import Cats from '../components/Cats'
import Header from '../components/Header'

const Home = () => {
  return <>
    <Header title='Cats Paradise' subtitle='Discover cats around the world' />
    <Cats />
  </>
}

export default Home
