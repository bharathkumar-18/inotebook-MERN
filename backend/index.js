//Import db.js
const connectToMongo = require('./db');
//Import express
const express = require('express')

//Function call to connect to MongoDB
connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})