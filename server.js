// require dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// initialize
const app = express();
const PORT = process.env.PORT || 3000;


// data expressions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

//include the routes file
require('./routes/routes')(app);

//create listener
app.listen(PORT, function() {
    console.log("Listening on Port: " + PORT);
});