let db = require("../database/models") //como está en index.js no tenemos que aclarar que está ahí


let peliculasController = {
    crear: function(req, res) {
        db.Genero.findAll()
        .then(function(generos) {
            return res.render("crearPeliculas", {generos:generos});
        })
    },
    guardado: function (req, res) {
        db.Pelicula.create({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.fecha_estreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating: req.body.rating
        });
        db.Actor.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,            
        });

        res.redirect('/peliculas');
    },
    listado: function (req, res) {
        db.Pelicula.findAll()
            .then(function(peliculas) {
               res.render('listadoPeliculas', {peliculas:peliculas}) 
            });
    },
    detalle: function(req, res) {
        db.Pelicula.findByPk(req.params.id, {
            include: [{association: "genero"}, {association: "actores"} ]
        })
            .then(function(pelicula) {
                res.render('detallePelicula', {pelicula:pelicula});
            })
    }
}

module.exports = peliculasController;