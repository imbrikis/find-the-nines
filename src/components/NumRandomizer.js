import React, { useState } from 'react'

const NumRandomizer = () => {
  const arrayLength = 200 // number of items (numbers) in the new grid

  // push a random number between 1 - 9 into an array
  export const numArr = []
  for (let x = 1; x <= arrayLength; x++) {
    numArr.push(Math.floor(Math.random() * 9) + 1)
  }

  // shorten the array to a square number
  // this will allow the grid to populate as a perfect square (3 x 3, 9 x 9, etc)
  numArr.splice(
    Math.pow(Math.floor(Math.sqrt(numArr.length)), 2),
    numArr.length
  )

  const countArrayNums = (arr) => {
    const numCount = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    arr.forEach((num) => {
      numCount[num - 1]++
    })
    return numCount
  }

  export const data = []

  countArrayNums(numArr).forEach((num, i) => {
    data.push({ number: i + 1, count: num })
  })

  return <div></div>
}

export default NumRandomizer
