import React from 'react'
import NumGenerator from './components/NumGenerator'
// import NumSelector from './components/NumSelector'

const App = () => {
  return (
    <div className='app-container'>
      <h1>Why is data visualization so cool?</h1>
      <h1>Let's find out!</h1>
      <h2>Find the nines</h2>
      <NumGenerator />
      {/* <NumSelector /> */}
    </div>
  )
}

export default App
