const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController')

router.get('/clientes', userController.listarTodos)


module.exports = router;