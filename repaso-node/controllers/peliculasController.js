let db = require("../database/models") //como está en index.js no tenemos que aclarar que está ahí


let peliculasController = {
    crear: function(req, res) {
        db.Genero.findAll()
        .then(function(generos) {
            return res.render("crearPeliculas", {generos:generos});
        })
    }
}

module.exports = peliculasController;