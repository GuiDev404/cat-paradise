import React from 'react'
import Emoji from './Emoji'
import { getFact } from '../services/cats.services'
import { useQuery } from 'react-query'

const Header = ({ title, subtitle }) => {
  const { isLoading, isError, isFetching, data } = useQuery('fact', getFact, {
    staleTime: 1000 * 60 * 5 // 5min
  }) 

  const averages = JSON.parse(window.localStorage.getItem('averages'));
  const factData = (isLoading || isFetching || isError) ? averages : data;

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-white  bg-dark"
      style={{ height: "350px" }}
    >
      <h1 className="serif display-4"> 30 Days Of React </h1>
      <div className="d-flex mt-4 mb-5 me-3">
        <p className="display-1 p-0 m-0">
          <Emoji description='cat gato' emoji="🐈" />
        </p>
        <div className="mt-3">
          <h1 className="serif m-0 h1"> {title} </h1>
          <p className="p-0 m-0 lead">{subtitle}</p>
        </div>
      </div>
      {(factData && factData?.averageWeight) || factData?.averageYears 
        ? (
        <p className="text-center">
          On average a cat can weight about <b> {factData.averageWeight}</b> Kg
          and lives <b> {factData.averageYears} </b> years.
        </p>
      ) : (
        <p className="text-center w-50"> {factData.fact} </p>
      )}
    </div>
  );
}

export default Header
