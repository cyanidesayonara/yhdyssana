const wordsRouter = require('express').Router()
const Word = require('../models/word')

// get words
wordsRouter.get('/', async (request, response) => {
  const words = await Word.find()
  return response.json(words.map(note => Word.format(note)))
})

// get words
wordsRouter.get('/:word', async (request, response) => {
  const words = await Word.find({
    text: request.params.word
  })
  return response.json(words.map(note => Word.format(note)))
})

// add words
wordsRouter.post('/', async (request, response) => {
  const body = request.body

  try {
    if (body.text === undefined) {
      return response.status(400).json({
        error: 'content missing'
      })
    }

    const word = new Word({
      text: body.text
    })

    const savedWord = await word.save()
    return response.json(Word.format(savedWord))
  } catch (exception) {
    return response.status(500).send({
      error: 'something went wrong...'
    })
  }
})

// delete word
wordsRouter.delete('/:id', async (request, response) => {
  try {
    await Word.findByIdAndRemove(request.params.id)
    return response.status(204).end()
  } catch (exception) {
    return response.status(400).send({
      error: 'malformed id'
    })
  }
})

// delete all words
wordsRouter.delete('/', async (request, response) => {
  try {
    await Word.deleteMany({})
    return response.status(200).send()
  } catch (exception) {
    return response.status(500).send({
      error: 'something went wrong...'
    })
  }
})

module.exports = wordsRouter
