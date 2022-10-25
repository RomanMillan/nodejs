const db = require('../models/db')

function getBeers(req, res){
    res.json(db.cervezas.find())
}

function getBeer(req, res){
    let queryId  = '{"_id": "' + req.params.id + '"}';
    console.log(queryId)
    res.json(db.cervezas.find(queryId)) /* {"_id": "5204bad8e7aa42dc942b6a15bbf7b5f3"}  no muestra a no ser que lo ponga literal*/
}

function addBeer(req, res){
    let data = req.body;
    res.json(db.cervezas.save(data))

}

function deleteBeer(req, res){
    /let idDeleteR = '{"_id": "' + req.params.id + '"}'; //no borra igual que en getBeer (solo borrar si lo pongo literal)
    res.json(db.cervezas.remove(idDeleteR)) 
}

function editBeer(req, res){

}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer}