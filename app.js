// Start up express and require other modules
var express = require("express");
    server = express();
    routes = require("./routes/routes")(server);

// Define middleware and server settings
server.use(express.static(__dirname + "/public"))
      .set("views", "./public/html")
      .set("view engine", "jade")

// Start up the server
var port = 3000;
server.listen(port, function() {
  console.log("Server is now listening on port: *" + port);
});

