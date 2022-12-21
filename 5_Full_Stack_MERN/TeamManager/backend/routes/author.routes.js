const AuthorController = require("../controllers/author.controller");
module.exports = function (app) {
  app.post("/api/player/", AuthorController.createOne);
  app.get("/api/players/", AuthorController.getAll);
  app.get("/api/player/:id", AuthorController.getOne);
  app.put("/api/player/:id", AuthorController.updateOne);
  app.delete("/api/player/:id", AuthorController.deleteOne);
};
