import React from 'react'
import { Link } from 'react-router-dom'

export default function Champion({ id, title, description, image, price, likes, setCurrChamp }) {
  const clone = {
    id, title, description, image, price, likes, setCurrChamp
  }
  return (
    <button
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => setCurrChamp(clone)}
    >
      <h4>{title}</h4>
      <h4>{description}</h4>
      <h4>{price}</h4>
      <h4>{likes}</h4>
      <Link
        to={`/champions/${id}`}
      >Details</Link>
    </button>
  )
}
