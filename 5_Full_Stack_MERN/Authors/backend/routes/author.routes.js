const AuthorController = require("../controllers/author.controller");
module.exports = function (app) {
  app.post("/api/authors/", AuthorController.createOne);
  app.get("/api/authors/", AuthorController.getAll);
  app.get("/api/authors/:id", AuthorController.getOne);
  app.put("/api/authors/:id", AuthorController.updateOne);
  app.delete("/api/authors/:id", AuthorController.deleteOne);
};
