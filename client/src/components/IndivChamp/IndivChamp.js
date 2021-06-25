import React from 'react'

function IndivChamp({ id, title, description, image, price, likes }) {
  return (
    <button
      style={{ backgroundImage: `url(${image})` }}
    >
      <h4>{title}</h4>
      <h4>{description}</h4>
      <h4>{price}</h4>
      <h4>{likes}</h4>
    </button>
  )
}

export default IndivChamp
