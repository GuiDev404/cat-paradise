import React from 'react';

function Emoji ({ description, emoji }) {
  return <span role='img' aria-label={description}> {emoji} </span>
}

export default React.memo(Emoji);