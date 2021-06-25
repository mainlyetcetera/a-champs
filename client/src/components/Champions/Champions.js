import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GroupChamp from '../GroupChamp/GroupChamp'
import { fetchData } from '../../api/api'

function Champions({ setCurrChamp }) {
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
      const { id, title, image, price } = champion
      return (
        <GroupChamp
          key={id}
          id={id}
          title={title}
          image={image}
          price={price}
          setCurrChamp={setCurrChamp}
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
