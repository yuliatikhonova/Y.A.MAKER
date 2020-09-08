module.exports = app => {
  const items = require("../../controllers/itemsController.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", items.create);

  // Retrieve all Tutorials
  router.get("/", items.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", items.findOne);


  // Delete a Tutorial with id
  router.delete("/:id", items.delete);

  app.use('/api/items', router);
};