// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/main");
    }
    res.render("signup", {});
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/main");
    }
    res.render("login", {});
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/main", isAuthenticated, (req, res) => {
    db.post.findAll({ where: { UserId: req.user.id } }).then(dbPost => {
      console.log(dbPost);
      const posts = dbPost.map(value => {
        return value.dataValues;
      });
      //database get my Post model and find me all of them then with the data (dbPost)
      res.render("mainpage", {
        cities: posts.filter(p => !p.hasCard),
        cards: posts.filter(p => p.hasCard)
      }); //send the data back to what ever requested it in json format
    });
  });
};
