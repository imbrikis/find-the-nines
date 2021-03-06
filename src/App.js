import React from 'react'
import { numArr, data } from './data/NumGenerator'
import NumGrid from './components/NumGrid'
// import NumSelector from './components/NumSelector'
import NumGraph from './components/NumGraph'

const App = () => {
  return (
    <div className='app-container'>
      <h1 className='mt-12'>Why is data visualization so cool?</h1>
      <h1 className='mb-6'>Let's find out!</h1>
      <h2 className='mb-2'>Find the nines</h2>
      <NumGrid numArr={numArr} />
      {/* <NumSelector /> */}
      <h2 className='mt-12 mb-2'>How about we add some helpers?</h2>
      <NumGrid numArr={numArr} circleTheNines />
      <h2 className='mt-12'>That still seems to take a while</h2>
      <h2 className='mb-6'>
        but we can do better with...
        <br />
        <span className='i-400'>Data Visualization!!!</span>
      </h2>
      <NumGraph data={data} />
    </div>
  )
}

export default App
