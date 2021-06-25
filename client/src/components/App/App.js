import React from 'react'
import { Route, Link } from 'react-router-dom'
import Header from '../Header/Header'
import Champions from '../Champions/Champions'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Route
        exact path='/champions'
        render={() => (
          <>
            <Champions />
          </>
        )}
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
