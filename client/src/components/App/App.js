import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Route
        exact path='/'
        render={() => (
          <>
            App started...
            <h1>random junk</h1>
          </>
        )}
      />
    </div>
  )
}

export default App
