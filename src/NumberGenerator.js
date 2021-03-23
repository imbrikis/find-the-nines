import React from 'react'

const NumberGenerator = () => {
  const gimmeANumber = 9

  const numArr = []
  for (let x = 1; x <= gimmeANumber; x++) {
    numArr.push(Math.floor(Math.random() * 9) + 1)
  }

  numArr.splice(
    Math.pow(Math.floor(Math.sqrt(numArr.length)), 2),
    numArr.length
  )

  const tableRowsAndColumns = Math.sqrt(numArr.length)

  return (
    <div
      className='num-gen-wrapper'
      style={{
        gridTemplateColumns: `repeat(${tableRowsAndColumns}, 1fr)`,
        gridTemplateRows: `repeat(${tableRowsAndColumns}, 1fr)`,
      }}
    >
      {numArr.map((num) => {
        return <div>{num}</div>
      })}
    </div>
  )
}

export default NumberGenerator
