import React from 'react'
import numArr from '../data/NumGenerator'

const NumberGrid = ({ circleTheNines }) => {
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

export default NumberGrid
