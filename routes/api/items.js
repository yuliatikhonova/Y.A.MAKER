module.exports = app => {
  const items = require("../../controllers/itemsController.js");

  var router = require("express").Router();

  // Create a new Item
  router.post("/", ...items.create);

  // Retrieve all Items
  router.get("/", items.findAll);

  // Retrieve a single Item with id
  router.get("/:id", items.findOne);

  // Delete a Item with id
  router.delete("/:id", items.delete);

  app.use('/api/items', router);
};