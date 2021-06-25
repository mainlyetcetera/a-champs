import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { fetchData } from '../../api/api'

export default function GroupChamp({ id, title, image, price, setCurrChamp }) {
  const history = useHistory()

  async function handleClick() {
    const url = `http://localhost:5000/champions/${id}`
    const data = await fetchData(url)
    console.log('indiv data', data)
    setCurrChamp(data)
  }

  function redirect() {
    history.push(`champions/${id}`)
  }

  return (
    <button
      style={{ backgroundImage: `url(${image})` }}
      onClick={async e => {
        e.preventDefault()
        await handleClick()
        redirect()
      }}
    >
      <h4>{title}</h4>
      <h4>{price}</h4>
    </button>
  )
}
