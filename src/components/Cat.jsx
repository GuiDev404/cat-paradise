import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Emoji from './Emoji'
import { Wikipedia } from './Icons'

const Cat = ({ single ,img, id ,life_span, name, origin, temperament, wikipedia_url, description, weight }) => {
  const { push } = useHistory();

  const redirect = ()=> push(`/${id}`);

  return  single 
  ? <div className="card mb-3 rounded-0 mx-auto my-5" style={{ maxWidth: '100vw' }}>
      <div className="row g-0">
        <div className="col-md-5">
          <img src={img} className="covered-img" alt={name} />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h3 className="card-title serif mb-1">{name} </h3>
            <small className="text-muted d-inline-block mb-3">{origin}</small>
            <p className="card-text">{description}</p>

            <div className='my-2 small'> {'░'.repeat(15)} </div>

            <h5 className='fw-bold'> Cat characteristics </h5>
            <section className='row'>
              <div className="col-md-6">

                <div className='mb-0 pb-0'>
                  <p className='me-2 my-0 p-0 '> <Emoji description='balanza' emoji='⚖️' /> Weight </p>
                  <small className=''> {weight} Kg </small>
                </div> 

              </div>
              <div className="col-md-6">

                <div className='mb-0 pb-0'>
                  <p className='me-2 my-0 p-0 '> 
                    <Emoji description='reloj, tiempo, clock, watch, time' emoji='⏳' /> Life Span 
                  </p>
                  <small className=''> {life_span} years </small>
                </div>

              </div>

              <div className='mt-3'>
                <p className='me-2 my-0 p-0'>  <Emoji description='cat gato' emoji='😾' /> Temperament  </p>
                {temperament.split(',').map(item=>
                  <span key={item} className="badge bg-light text-dark shadow-sm me-1 rounded-0 pb-0 mb-0"> {item} </span>
                )}
              </div> 
            </section> 

          </div>
          <div className='card-footer z-index-footer' >
            {wikipedia_url &&
              <a href={wikipedia_url} title={`${name} in Wikipedia`} className='btn btn-dark btn-sm rounded-0 me-1 z-index-footer' target='_blank'> 
                {Wikipedia}
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  : (
    <div id={id} className="card rounded-0 m-2 text-dark text-decoration-none" style={{ width: 'calc(45% + 100px)', cursor: 'pointer' }} onClick={redirect}>
      <img src={img} className="card-img-top rounded-0" alt={name} loading='lazy' />
      <div className="card-body">
        <h3 className="card-title serif mb-1">{name} </h3>
        <small className="text-muted d-inline-block mb-3">{origin}</small>
        <p className="card-text">{description}</p>

        <div className='my-2 small'> {'░'.repeat(15)} </div>

      </div>
      <div className='card-footer z-index-footer'>
        {wikipedia_url &&
          <a href={wikipedia_url} title={`${name} in Wikipedia`} className='btn btn-dark btn-sm rounded-0 me-1 z-index-footer' target='_blank' > 
            {Wikipedia}
          </a>
        }
      </div>
    </div>
  )
}

export default Cat
