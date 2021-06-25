import React from 'react'

export default function Champion({ id, title, description, image, price, likes }) {
  return (
    <div
      style={{backgroundImage: `url(${image})`}}
    >
      <h4>{title}</h4>
      <h4>{description}</h4>
      <h4>{price}</h4>
      <h4>{likes}</h4>
    </div>
  )
}
