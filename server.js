const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('static'));

require("./Develop/routes/api-routes.js")(app);
require("./Develop/routes/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});