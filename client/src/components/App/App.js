import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../Header/Header'
import Champions from '../Champions/Champions'
import Champion from '../Champion/Champion'
import fetchData from '../../api/api'
import './App.css'

function App() {
  const [overallChampions, setOverallChampions] = useState([])
  const [currChamp, setCurrChamp] = useState(null)

  return (
    <div className="App">
      <Header />
      <Route
        exact path='/champions'
        render={() => (
          <>
            <Champions
              setOverallChampions={setOverallChampions}
              setCurrChamp={setCurrChamp}
            />
          </>
        )}
      />
      <Route
        exact path='/champions/:id'
        render={({ match }) => {
          const { id, title, description, image, price, likes, setCurrChamp }
            = currChamp
          return (
            <Champion
              id={id}
              title={title}
              description={description}
              image={image}
              price={price}
              likes={likes}
              setCurrChamp={setCurrChamp}
              path={match.path}
            >
            </Champion>
          )
        }}
      />
      <Route
        exact path='/'
        render={() => (
          <>
            <h4>Don't worry, it's not a Pokemon app...</h4>
            <Link to='/champions'>See some champs...</Link>
          </>
        )}
      />
    </div>
  )
}

export default App
