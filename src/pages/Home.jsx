import React from 'react'
import Cats from '../components/Cats'
import Header from '../components/Header'
import ListOfTags from '../components/ListOfTags'

const Home = ({ data }) => {
  const [cats, setCats] = React.useState(data);
  const numberByOrigin = data.reduce((acc, ele)=> {
    acc[ele.origin] = (ele.origin in acc) ? acc[ele.origin] + 1 : 1;
    return acc;
  }, {});
  const keyPairValue = Object.entries(numberByOrigin);
  const numberByOriginSorted = keyPairValue.sort((a,b)=> a[1] - b[1])

  const filterCatsByOrigin = function (origin) {
    const filtered = origin !== 'All' ? data.filter(cat=> cat.origin === origin) : data;
    setCats(filtered);
  }

  return <>
    <Header title='Cats Paradise' subtitle='Discover cats around the world' />
    {numberByOrigin && <ListOfTags handleClick={filterCatsByOrigin} tags={[...numberByOriginSorted, ['All', data.length]]}/>}
    <Cats data={cats} />
  </>
}

export default Home
