var express = require('express');
const app = require('../app');
var router = express.Router();
var peliculasController = require("../controllers/peliculasController")

//creación de película
router.get("/crear", peliculasController.crear)

module.exports = router;