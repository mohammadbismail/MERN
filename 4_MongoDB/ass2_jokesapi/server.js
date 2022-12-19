const express = require("express");
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
require("./backend/config/mongoose.config");
const allRoutes = require("./backend/routes/jokes.routes");
allRoutes(app);
app.listen(8000, () =>
  console.log(`Server has started and listening to port ${8000}`)
);
