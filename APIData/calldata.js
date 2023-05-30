const movies = require('../model/movies');
const winstonLogger = require('../logger');

const getAllMovies = async (req, res) => {
    try {
      const result = await movies.find({});
      winstonLogger.info("Movies Data fetched");
      res.json(result);
    } catch (err) {
      winstonLogger.error("Error Occurred", err);
      res.send("An error occurred: " + err);
    }
  };

  module.exports = {
    getAllMovies: getAllMovies
  }
   