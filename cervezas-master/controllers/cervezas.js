const db = require('../models/db')

function getBeers(req, res){
    res.json(db.cervezas.find())
}

function getBeer(req, res){
    res.json(db.cervezas.find({"_id": "55ba10d3aaed47bc8bd3e7ddc567302a"}))
}

function addBeer(req, res){

}

function deleteBeer(req, res){

}

function editBeer(req, res){

}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer}