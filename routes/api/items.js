module.exports = app => {
  const items = require("../../controllers/itemsController.js");

  var router = require("express").Router();
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.json({ error: "401:Not authenticated" });
  }

  // Create a new Tutorial
  router.post("/", isLoggedIn, ...items.create);

  // Retrieve all Tutorials
  router.get("/", items.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", items.findOne);

  // Delete a Tutorial with id
  router.delete("/:id", isLoggedIn, items.delete);

  app.use('/api/items', router);
};