const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moviesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    director:{
        type: String,
        required: true
    },
    actors: {
        type: [String],
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('movies',moviesSchema);