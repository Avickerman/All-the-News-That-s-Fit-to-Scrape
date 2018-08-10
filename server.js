var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");


var PORT = 3000;

var app = express();

// Configure middleware
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/");
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";


  
 