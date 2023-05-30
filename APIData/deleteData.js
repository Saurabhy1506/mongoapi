const movies = require('../model/movies');
const winstonLogger = require('../logger')

const deleteMovie = async (req, res) => {
    try {
      const movieId = req.params.id;
      const deletedMovie = await movies.findOneAndDelete({ _id: movieId });
  
      if (deletedMovie) {
        winstonLogger.info("Requested Data Deleted");
        res.send("Movie deleted successfully");
      }
      else {
        winstonLogger.info("ID Not found")
        res.send("Movie not found");
      }
    } catch (err) {
        winstonLogger.error("Error Occured",err)
      res.send("An error occurred: " + err);
    }
  };

  module.exports = {
    deleteMovie:deleteMovie
  }