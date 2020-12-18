const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.use(express.static('client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.end()
});

app.post('/gameover', function (req, res) {
  res.status(200).json('GAME OVER! WINNER IS: PLAYER ' + req.body.player)
});

app.listen(3000, () => console.log('Listening on port 3000'))
