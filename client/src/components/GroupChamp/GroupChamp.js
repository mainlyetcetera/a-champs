import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import fetchData from '../../api/api'

export default function GroupChamp({ id, title, description, image, price, likes, setCurrChamp, path }) {
  // this should be the request to grab the indiv champ, set to currChamp in App? 

  async function handleClick() {
    /*
    if (!path) {
      setCurrChamp(target)
    } 
    */
    const url = `http://localhost:5000/champions/${id}`
    const data = await fetchData(url)
    console.log('indiv data', data)
    setCurrChamp(data)
  }

  return (
    <button
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => handleClick()}
    >
      <h4>{title}</h4>
      <h4>{price}</h4>
      <Link
        to={`/champions/${id}`}
      >Details</Link>
      {/*path && <Link
        to={`/champions`}
      >Back</Link>*/}
    </button>
  )
}


/*
export default function Champion({ id, title, description, price, likes, setCurrChamp, path }) {
  const [champion, setChampion] = useState(null)

  useEffect(() => {
    async function fetchChampion() {
      if (path) {
        const url = `http://localhost:5000/champions/${id}`
        const data = await fetchData(url)
        setCurrChamp(data)
        setChampion(data)
      }

      fetchChampion()
    }
  }, [])

  function handleClick(target) {
    if (!path) {
      setCurrChamp(target)
    } else {
      setCurrChamp(null)
    }
  }

  const toRender = champion ? (
    <button
      style={{ backgroundImage: `url(${champion.image})` }}
      onClick={() => handleClick(champion)}
    >
      <h4>{title}</h4>
      <h4>{description}</h4>
      <h4>{price}</h4>
      <h4>{likes}</h4>
      {path && <Link
        to={`/champions`}
      >Back</Link>}
    </button>
  ) : (
    <button
      style={{ backgroundImage: `url(${champion.image})` }}
      onClick={() => handleClick(champion)}
    >
      <h4>{title}</h4>
      <h4>{price}</h4>
      {!path && <Link
        to={`/champions/${id}`}
      >Details</Link>}
    </button>
  )

  return (
    <>
      {toRender}
    </>
  )
}
*/
