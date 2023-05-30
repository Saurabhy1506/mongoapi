const movies = require('../model/movies');
const winstonLogger = require('../logger');

const getMovieByTitle = async (req, res) => {
    try {
      const movieTitle = req.params.title;
      const result = await movies.findOne({ title: movieTitle });
      if (result) {
        winstonLogger.info("Selected title data fetched");
        res.json(result);
      } else {
        res.send("The title of the movie you are looking for is not in our database");
      }
    } catch (err) {
      winstonLogger.info("An error occurred", err);
      res.send("An error occurred: " + err);
    }
  };

  module.exports = {
    getMovieByTitle:getMovieByTitle
  }