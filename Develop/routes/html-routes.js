const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

//returns index.html file
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // notes route loads notes.html file
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

};
