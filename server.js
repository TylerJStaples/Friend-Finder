var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//require("./app/routing/api-routes.html")(app);
//require("./app/routing/html-routes.html")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});