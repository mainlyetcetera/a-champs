import React from 'react'
import { useHistory } from 'react-router-dom'
import { fetchData } from '../../api/api'
import './GroupChamp.css'

export default function GroupChamp({ id, title, image, price, setCurrChamp }) {
  const history = useHistory()

  async function handleClick() {
    const url = `http://localhost:5000/champions/${id}`
    const data = await fetchData(url)
    setCurrChamp(data)
  }

  function redirect() {
    history.push(`champions/${id}`)
  }

  return (
    <button
      className='group-champ'
      style={{ backgroundImage: `url(${image})` }}
      onClick={async e => {
        e.preventDefault()
        await handleClick()
        redirect()
      }}
    >
      <h4
        className='group-champ-text'
      >{title}</h4>
      <h4
        className='group-champ-text'
      >{price}</h4>
    </button>
  )
}
