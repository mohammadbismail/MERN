const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1/productsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to database"))
  .catch((err) =>
    console.log("Something went wrong with connection to database", err)
  );
