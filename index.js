const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const route = require('./route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

const database = "mongodb://0.0.0.0:27017/Hollywood";
mongoose.connect(database);

app.use('/api/movies',route);

app.listen(3000,()=>{
    console.log(`server is running on port${3000}`);
})