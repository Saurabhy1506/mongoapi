const movies = require('../model/movies');
const {validateMovieData} = require('../validationRules');
const winstonLogger = require('../logger');

const addMovie = async (req, res) => {
    try {
      const movieData = req.body;
      
      // Validate movie data
      const validation = validateMovieData(movieData);
      if (validation.fails()) {
        const errors = validation.errors.all();
        winstonLogger.error('Validation error:', errors);
        return res.status(400).json({ errors });
      }
  
      await movies.create(movieData);
      winstonLogger.info("Data added");
      res.send("Movie added successfully");
    } catch (err) {
      winstonLogger.info("Error Occurred", err);
      res.send("An error occurred: " + err);
    }
  };

module.exports = {
  addMovie:addMovie
}