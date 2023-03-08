const express = require('express');
const router = express.router();
const categoryController = require('../controllers/moviesController');

/*

PUT /movies/:id
DELETE /movies/:id

*/

router.get('/',categoryController.getAllMovies);
router.post('/',categoryController.createMovie);
router.get('/:id', productController.getMovieById);


module.exports =  router;

