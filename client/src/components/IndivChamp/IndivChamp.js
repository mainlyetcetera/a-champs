import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { handleLike } from '../../api/api'
import './IndivChamp.css'

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
    <section
      className='indiv-champ'
      style={{ backgroundImage: `url(${image})` }}
    >
      <article
        className='text-container'
      >
        <h4
          className='title'
        >Name: {title}</h4>
        <h4
          className='desc'
        >Description: {description}</h4>
        <h4
          className='stats'
        >Price: {price}</h4>
        <h4
          className='stats'
        >Likes: {currLike}</h4>
      </article>
      <article
        className='btn-container'
      >
        <button
          className='indiv-btn'
          onClick={() => handleLikeClick()}
          disabled={disable}
        >
          Like!
      </button>
        <button
          className='indiv-btn'
          onClick={e => {
            e.preventDefault()
            history.goBack()
          }}
        >Back
      </button>
      </article>
    </section>
  )
}

export default IndivChamp
