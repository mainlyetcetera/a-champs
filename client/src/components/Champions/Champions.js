import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GroupChamp from '../GroupChamp/GroupChamp'
import { fetchData } from '../../api/api'

function Champions({ setOverallChampions, setCurrChamp }) {
  const [champions, setChampions] = useState([])

  function assignChampions(list) {
    setChampions(list)
    setOverallChampions(list)
  }

  useEffect(() => {
    async function fetchChampions() {
      const url = 'http://localhost:5000/champions'
      const data = await fetchData(url)
      console.log('data', data)
      assignChampions(data)
    }

    fetchChampions()
  }, [])

  function getChampions() {
    return champions.map(champion => {
      const { id, title, description, image, price, likes } = champion
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
