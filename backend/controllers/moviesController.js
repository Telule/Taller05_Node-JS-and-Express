
const Movie = require('../models/movies');


module.exports = {

    async getAllMovies(req, res) {

        try {
            const movies = await Product.find().populate('Movie');
            res.status(200).json(movies);
        } catch (err) {
            res.status(500).json({mensaje: err.message});
        }
    },

    async createMovie(req, res) {
        const Movie = new Category({
            name : req.body.name
        });

        try {
            const newMovie = await movies.save();
            res.status(201).json(movies);
        } catch (err) {
            res.status(400).json({mensaje: err.message});
        }
    },

    
    async getAllMovieById(req, res) {

        try {
            const movie = await Movie.findById(req.params.id).populate('Movie');
            res.status(200).json(movie);
        } catch (err) {
            res.status(500).json({mensaje: err.message});
        }
    },

};