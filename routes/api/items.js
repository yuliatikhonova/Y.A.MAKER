module.exports = app => {
  const items = require("../../controllers/itemsController.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", items.create);

  // Retrieve all Items
  router.get("/", items.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", items.findOne);

  // Update a Tutorial with id
  router.put("/:id", items.update);

  // Delete a Tutorial with id
  router.delete("/:id", items.delete);

  app.use('/api/items', router);
};