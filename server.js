// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Require Click schema
var Lineup = require("./models/lineup");
var {mongoose} = require('./app/db/mongoose');
var {Todo} = require('./routes/dbRoutes');

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("./public"));
var routes = require("./routes/helpers");

app.use("/", routes);

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
