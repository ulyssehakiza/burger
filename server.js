//Dependecies.

var express = require("express");
var bodyParser = require("body-parser");

// Express App set ups
var app = express();
var PORT = process.env.PORT || 8000;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_Controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on port:%s", PORT);
});
