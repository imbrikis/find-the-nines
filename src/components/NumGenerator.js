import React from 'react'

const NumberGenerator = ({ circleTheNines }) => {
  const gimmeANumber = 200

  const numArr = []
  for (let x = 1; x <= gimmeANumber; x++) {
    numArr.push(Math.floor(Math.random() * 9) + 1)
  }

  numArr.splice(
    Math.pow(Math.floor(Math.sqrt(numArr.length)), 2),
    numArr.length
  )

  const getStyles = (num) => {
    let styleNums = ''
    if (circleTheNines) {
      styleNums = num === 9 ? 'num-item num-circled' : 'num-item'
    } else {
      styleNums = 'num-item'
    }
    return styleNums
  }

  const tableRowsAndColumns = Math.sqrt(numArr.length)

  const renderedItems = numArr.map((num) => {
    return <div className={getStyles(num)}>{num}</div>
  })

  return (
    <div
      className='num-gen-wrapper'
      style={{
        gridTemplateColumns: `repeat(${tableRowsAndColumns}, 1fr)`,
        gridTemplateRows: `repeat(${tableRowsAndColumns}, 1fr)`,
      }}
    >
      {renderedItems}
    </div>
  )
}

export default NumberGenerator
