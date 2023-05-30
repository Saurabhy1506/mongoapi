const validate = require('validatorjs');

const movieValidationRules = {
    title: 'required',
    genre: 'required',
    releaseYear: 'numeric'
  };


  const validateMovieData = (data) => {
    const validation = new validate(data, movieValidationRules);
    return validation;
  };
  
  module.exports = {
    validateMovieData
  };