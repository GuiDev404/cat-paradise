import React from 'react'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className="spinner-grow spinner-grow-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
