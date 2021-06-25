import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { handleLike } from '../../api/api'

function IndivChamp({ id, title, description, image, price, likes }) {
  const [currLike, setCurrLike] = useState(likes)
  const [disable, setDisable] = useState(false)
  const history = useHistory()

  async function handleLikeClick() {
    const url = `http://localhost:5000/champions/${id}`
    const data = await handleLike(url)
    setCurrLike(data.likes)
    setDisable(true)
  }

  return (
    <article
      style={{ backgroundImage: `url(${image})` }}
    >
      <h4>{title}</h4>
      <h4>{description}</h4>
      <h4>{price}</h4>
      <h4>{currLike}</h4>
      <button
        onClick={() => handleLikeClick()}
        disabled={disable}
      >
        Like!
      </button>
      <button
        onClick={e => {
          e.preventDefault()
          history.goBack()
        }}
      >Back
      </button>
    </article>
  )
}

export default IndivChamp
