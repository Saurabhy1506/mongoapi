const express = require('express')
const router = express.Router();
const callData = require('./APIData/calldata');
const callDataById = require('./APIData/callDataById');
const addData = require('./APIData/addData');
const updateData = require('./APIData/updateData')
const deleteData = require('./APIData/deleteData');

//Retrieve All Data
router.get('/',callData.getAllMovies)

// Retrieve a movie by title
router.get('/:title', callDataById.getMovieByTitle);

// Add a new movie
router.post('/', addData.addMovie);

// Update a movie
router.put('/:id', updateData.updateMovie);

// Delete a movie
router.delete('/:id', deleteData.deleteMovie);

module.exports = router;