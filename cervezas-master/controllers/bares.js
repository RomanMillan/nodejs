const db = require('../models/db')

function getBares(req, res){
    res.json(db.bares.find())
}

function getBar(req, res){
    let queryId  = {_id: req.params.id};
    res.json(db.bares.find(queryId))
}

function addBar(req, res){
    let data = req.body;
    res.json(db.bares.save(data))

}

function deleteBar(req, res){
    let idDeleteR = {_id:  req.params.id}; 
    res.json(db.bares.remove(idDeleteR)) 
}

function editBar(req, res){
    let queryId = {_id:  req.params.id};
    let dataUpdate = req.body;
    res.json(db.bares.update(queryId, dataUpdate))
}

module.exports = { getBares, getBar, addBar, deleteBar, editBar}