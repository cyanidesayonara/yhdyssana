const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const wordsRouter = require('./controllers/words')
const config = require('./utils/config')

const app = express()

mongoose
  .connect(config.mongoUrl, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Connected to database')
  })
  .catch(error => {
    console.log(error)
  })

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('./dist'))

// app.get(/.*/, (request, response) =>
//   response.sendFile(__dirname + '/dist/index.html')
// )

const server = http.createServer(app)

app.use('/api/words', wordsRouter)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
server.on('close', () => {
  mongoose.connect.close()
})

module.exports = {
  app,
  server
}
