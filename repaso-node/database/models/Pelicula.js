module.exports = function(sequelize, dataTypes) {
    
    let alias = "Pelicula";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        awards: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }
    }
    
    let config = {
        tableName: "movies",
        timestamps: false
    }
    
    let Pelicula = sequelize.define(alias, cols, config);
    
    return Pelicula;
}