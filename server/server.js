require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//parse applicattion/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {
    res.json('Hello World')
})

app.get('/usuario', function(req, res) {
    res.json('get Usuario')
})


app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto ", process.env.PORT);
})