const movies = require('../model/movies');
const winstonLogger = require('../logger')

const updateMovie = async (req, res) => {
    try {
      const movieId = req.params.id;
      const updateMovieData = req.body;
  
      const updatedMovie = await movies.findOneAndUpdate({ _id: movieId }, updateMovieData, { new: true });
  
      if (updatedMovie) {
        winstonLogger.info("Data updated");
        res.json(updatedMovie);
      } else {
        winstonLogger.info("Data not found");
        res.send("Movie not found");
      }
    } catch (err) {
        winstonLogger.error("Error Occurred", err);
        res.send("An error occurred: " + err);
      }
    };

    module.exports = {
      updateMovie:updateMovie
    }