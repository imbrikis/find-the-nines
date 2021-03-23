const arrayLength = 200

const numArr = []
for (let x = 1; x <= arrayLength; x++) {
  numArr.push(Math.floor(Math.random() * 9) + 1)
}

numArr.splice(Math.pow(Math.floor(Math.sqrt(numArr.length)), 2), numArr.length)

export default numArr
