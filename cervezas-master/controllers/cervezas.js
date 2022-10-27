const db = require('../models/db')

function getBeers(req, res){
    res.json(db.cervezas.find())
}

function getBeer(req, res){
    let queryId  = {_id: req.params.id};
    res.json(db.cervezas.find(queryId))
}

function addBeer(req, res){
    let data = req.body;
    res.json(db.cervezas.save(data))

}

function deleteBeer(req, res){
    let idDeleteR = '{"_id": "' + req.params.id + '"}'; 
    res.json(db.cervezas.remove(idDeleteR)) 
}

function editBeer(req, res){

}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer}