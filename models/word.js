const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

wordSchema.statics.format = note => {
  return {
    id: note._id,
    text: note.text
  }
}

const Word = mongoose.model('Word', wordSchema)

module.exports = Word
