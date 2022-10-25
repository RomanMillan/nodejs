var express = require('express');
var app = express();       
var port = 8080 

let cervezas = [{"id":1,"nombre":"San Miguel","graduación":5},{"id":2,"nombre":"Cruzcampo","graduación":3},{"id":3,"nombre":"Estrella g","graduación":4}];

app.get('/', function(req, res) {
    res.json(cervezas)  
  })

  app.delete('/anadirC/:id', function(req, res){
      res.json(cervezas)
  })

app.use('/cervezas',require('./routes/cervezas.js'))
  
// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)