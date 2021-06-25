import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import fetchData from '../../api/api'

function Champions() {
  const [champions, setChampions] = useState([])

  useEffect(() => {
    async function fetchChampions() {
      fetch('http://localhost:5000/champions')
      .then(data => {
        console.log('data now', data)
        data.json()
      })
      .catch(err => console.log(err))
    }

    fetchChampions()
  }, [])

  function getNames() {
    /*
    return champions.map(champion => (
      <h3>champion.title</h3>
    ))
    */
    return ['rawr']
  }

  return (
    <>
      {getNames()}
      <Link to='/'>Go back</Link>
    </>
  )
}

export default Champions
