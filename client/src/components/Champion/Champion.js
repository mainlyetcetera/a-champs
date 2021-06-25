import React from 'react'
import { Link } from 'react-router-dom'

export default function Champion({ id, title, description, image, price, likes, setCurrChamp, path }) {
  const clone = {
    id, title, description, image, price, likes, setCurrChamp
  }

  function handleClick(target) {
    if (!path) {
      setCurrChamp(target)
    } else {
      setCurrChamp(null)
    }
  }
  return (
    <button
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => handleClick(clone)}
    >
      <h4>{title}</h4>
      <h4>{description}</h4>
      <h4>{price}</h4>
      <h4>{likes}</h4>
      {!path && <Link
        to={`/champions/${id}`}
      >Details</Link>}
      {path && <Link
        to={`/champions`}
      >Back</Link>}
    </button>
  )
}
