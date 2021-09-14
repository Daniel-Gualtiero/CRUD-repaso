var express = require('express');
const app = require('../app');
var router = express.Router();
var peliculasController = require("../controllers/peliculasController")

//creación de película
router.get("/crear", peliculasController.crear);
router.post("/crear", peliculasController.guardado);

//Lectura
router.get("/", peliculasController.listado);

//Detalle
router.get("/:id", peliculasController.detalle);

module.exports = router;