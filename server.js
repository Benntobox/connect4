const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.json('CONNECTED')
})

app.listen(3000, () => console.log('Listening on port 3000'))