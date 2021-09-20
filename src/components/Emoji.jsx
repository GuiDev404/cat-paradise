import React from 'react'

const Emoji = ({ description, emoji }) => {
  return  <span role="img" aria-label={description} >{emoji}</span>
}

export default Emoji
