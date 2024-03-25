import React from 'react'
import './App.css'
import Posts from './components/Posts'


function App() {
  return (
    <div>
      <h1>Instagram!</h1>
      <Posts content="This is a test post!" />
      <Posts content="This is another test post!" />
    </div>
  )
}

export default App
