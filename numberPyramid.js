const numberPyramid = (numb) => {
  let str = ''
  for (let c = 1; c < numb; c++) {
    str += c.repeat(c)
    if (c !== numb) {
      str += '\n'
    }
  }
  return console.log(str)
}

console.log(numberPyramid(8))