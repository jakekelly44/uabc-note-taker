// dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');
// init
const app = express();
const PORT = process.env.PORT || 3000;
// data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
//routes file
require('./routes/routes')(app);
//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});