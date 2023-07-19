//Import db.js
const connectToMongo = require('./db');
//Import express
const express = require('express')

//Function call to connect to MongoDB
connectToMongo();

const app = express()
const port = 3000

//Middleware to use req.body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})