import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

  function getNames() {
    return champions.map(champion => (
      <h3>{champion.title}</h3>
    ))
  }

  return (
    <>
      {getNames()}
      <Link to='/'>Go back</Link>
    </>
  )
}

export default Champions
