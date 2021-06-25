import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../Header/Header'
import Champions from '../Champions/Champions'
import IndivChamp from '../IndivChamp/IndivChamp'
import './App.css'

function App() {
  const [currChamp, setCurrChamp] = useState(null)

  return (
    <div className="App">
      <Header />
      <Route
        exact path='/champions'
        render={() => (
          <>
            <Champions
              setCurrChamp={setCurrChamp}
            />
          </>
        )}
      />
      <Route
        exact path='/champions/:id'
        render={({ match }) => {
          const { id, title, description, image, price, likes }
            = currChamp
          return (
            <IndivChamp
              id={id}
              title={title}
              description={description}
              image={image}
              price={price}
              likes={likes}
              setCurrChamp={setCurrChamp}
              path={match.path}
            >
            </IndivChamp>
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
