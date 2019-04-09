const fs = require('fs')

const getWords = fs.readFile('<% expression %>words.txt', function(text) {
  const textByLine = text.split('\n')
  console.log(textByLine)
})

export default getWords
