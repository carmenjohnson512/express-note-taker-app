const path = require("path");
// const public = require("public");

// Routes
// =============================================================
module.exports = function(app) {

//returns index.html file
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../static/index.html"));
  });

  // /notes route loads notes.html file
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../static/notes.html"));
    // res.render("public/assets/notes");
  });

};
