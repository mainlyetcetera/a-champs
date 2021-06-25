import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Champion from '../Champion/Champion'
import fetchData from '../../api/api'

function Champions() {
  const [champions, setChampions] = useState([])

  useEffect(() => {
    async function fetchChampions() {
      const url = 'http://localhost:5000/champions'
      const data = await fetchData(url)
      setChampions(data)
    }

    fetchChampions()
  }, [])

  function getChampions() {
    return champions.map(champion => {
      const { id, title, description, image, price, likes } = champion
      return (
        <Champion
          key={id}
          title={title}
          description={description}
          image={image}
          price={price}
          likes={likes}
        />
      )
    })
  }

  return (
    <>
      {getChampions()}
      <Link to='/'>Go back</Link>
    </>
  )
}

export default Champions
