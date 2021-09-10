import React from 'react'
import Emoji from './Emoji'


const Header = ({ title, subtitle }) => {
  const averages = JSON.parse(window.localStorage.getItem('averages'));

  return (
    <div className='d-flex flex-column justify-content-center align-items-center text-white  bg-dark' style={{ height: '350px' }}>
      <h1 className='serif display-4'> 30 Days Of React </h1>
      <div className='d-flex mt-4 mb-5 me-3'>
        <p className='display-1 p-0 m-0'>
          <Emoji emoji='🐈' />
        </p>
        <div className='mt-3'>
          <h1 className='serif m-0 h1'> {title} </h1>
          <p className='p-0 m-0 lead'>{subtitle}</p>
        </div>
      </div>
      {averages &&
        <p className='text-center'> On average a cat can weight about <b> {averages.averageWeight}</b> Kg  and lives <b> {averages.averageYears} </b> years.</p>
      }
    </div>
  )
}

export default Header
