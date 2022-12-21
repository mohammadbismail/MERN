const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());
require("./backend/config/mongoose.config");
const routes = require("./backend/routes/products.routes");
routes(app);
app.listen(8000, () => console.log(`Server is running on port ${8000}`));
