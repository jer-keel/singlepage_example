module.exports = function(server) {
  server.get("/", function(req, res) {
    res.render("index");
  });

  server.get("/html/partials/:name", function(req, res) {
    var name = req.params.name;
    res.render("partials/" + name);
  });
};
