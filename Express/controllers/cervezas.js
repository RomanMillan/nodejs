
function getCervezas(req, res){
    res.json({mensaje: 'Beber cerveza'});
}

function crearCerveza(req, res) {
    cervezas.push(req.body,req.params);
    res.send(req.body);
    res.json(req.body);
    
  }

function borrarCerveza (req,res){
    let idBorrar  = parseInt(req.params.id);
    cervezas = cervezas.filter(cerveza => cerveza.id !==idBorrar);
   res.json({mensaje: 'Borrado correctamente'})
}

module.exports={getCervezas,crearCerveza,borrarCerveza}