const express = require('express');
const router = express.Router();
const {getCervezas,crearCerveza, borrarCerveza} = require('../controllers/cervezas');

router.get('/',getCervezas);


router.post('/', crearCerveza);

router.delete('/:id',borrarCerveza)

module.exports = router;