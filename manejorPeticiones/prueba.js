var express = require('express')
var app = express()               

var port = 8080

app.get('/', function(req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })   
  })


// iniciamos servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)