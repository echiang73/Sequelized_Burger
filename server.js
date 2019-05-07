var express = require("express");
var db = require("./models"); // Added Sequelize Model reference

var PORT = process.env.PORT || 8080;

var app = express();

db.sequelize.sync().then(function() { // Added Sequelize Sync function
  app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
  });
});

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller.js");
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// app.use(routes);

// Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });

module.exports = app;