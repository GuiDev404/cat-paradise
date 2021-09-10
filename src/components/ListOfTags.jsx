import React from 'react'

const ListOfTags = ({ tags, handleClick }) => {

  return (
    <div className="col-md-5 mt-5 mx-auto p-0">
      {tags.map((tag) => {
        const [origin, number] = tag;

        return (
          <button key={origin} onClick={()=> handleClick(origin)} className="btn btn-outline-dark rounded-0 m-1">
            {origin} ({number})
          </button>
        );
      })}
    </div>
  );
}

export default ListOfTags
