var express = require('express');
const { rmSync } = require('fs');
var app = express()               

var port = 8080 

//Middleware
app.use(express.json());

let cervezas = [{"id":1,"nombre":"San Miguel","graduación":5},{"id":2,"nombre":"Cruzcampo","graduación":3},{"id":3,"nombre":"Estrella g","graduación":4}];

app.get('/', function(req, res) {
  res.json(cervezas)  
})


app.post('/anadir', function (req, res) {
    cervezas.push(req.body);
    res.send(req.body);
    res.json(req.body);
  });


//Prueba de insertar tambiem por parametros
/*
  /:oco Es un nombre cualquiera (como una especie de variable) e indica que espero un 
  dato por parametro. 
  Despues tengo que poner req.params para indicar que requiero el paramerto.
*/
app.post('/anadirV/:oco', function (req, res) {
  cervezas.push(req.body,req.params);
  res.send(req.body);
  res.json(req.body);
  
});



app.delete('/borrar/:id', function(req, res){
  let idBorrar  = parseInt(req.params.id);
   cervezas = cervezas.filter(cerveza => cerveza.id !==idBorrar);
  res.json({mensaje: 'Borrado correctamente'});
});

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)