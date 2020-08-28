// Requiring our models and passport as we've configured it
require("dotenv").config();
const fs = require("fs");
const cloudName = process.env.CLOUDINARY_NAME;
const crypto = require("crypto");
const apiKey = process.env.CLOUDINARY_KEY;
const apiSecret = process.env.CLOUDINARY_SECRET;
const cloudinary = require("cloudinary");
const mime = require("mime");
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: "public/uploads",
    filename: function(req, file, cb) {
      crypto.pseudoRandomBytes(16, (err, raw) => {
        cb(
          null,
          raw.toString("hex") + Date.now() + "." + mime.extension(file.mimetype)
        );
      });
    }
  })
});
const uploadcdny = (req, res, next) => {
  if (req.file) {
    console.log(req.file.filename);

    cloudinary.uploader.upload(
      "public/uploads/" + req.file.filename,
      result => {
        console.log(result);

        fs.unlink("public/uploads/" + req.file.filename, err => {
          if (err) {
            throw err;
          }
          console.log("path/file.txt was deleted");
        });
        req.file.filename = result.url;
        return next();
      }
    );
  } else {
    return next();
  }
};
const db = require("../models");
const passport = require("../config/passport");
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //===========================================================Adding to bucket list

  app.get("/api/post", isLoggedIn, (req, res) => {
    //Reading the data from the data base
    db.post.findAll({ where: { UserId: req.user.id } }).then(dbPost => {
      //database get my Post model and find me all of them then with the data (dbPost)
      res.json(dbPost); //send the data back to what ever requested it in json format
    });
  });

  app.post("/api/post", isLoggedIn, (req, res) => {
    // POST route for saving a new post
    console.log(req.body);
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.post
      .create({
        // create takes an argument of an object describing the item we want to
        city: req.body.city,
        UserId: req.user.id
      })
      .then(dbPost => {
        // We have access to the new todo as an argument inside of the callback function
        res.json(dbPost);
      })
      .catch(err => {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.json({ error: "401:Not authenticated" });
  }
  app.get("/", isLoggedIn, (req, res) => {
    res.send("Welcome to the api!");
  });

  app.post(
    "/api/update",
    isLoggedIn,
    upload.single("imageUpload"),
    uploadcdny,
    (req, res) => {
      console.log(req.file);
      let hasImage = true;
      if (req.file === undefined) {
        req.file = {};
        req.file.filename = null;
      }
      if (req.file.filename === null) {
        hasImage = false;
      } else {
        req.file.filename = req.file.filename;
      }
      db.post
        .update(
          {
            city: req.body.city,
            countryName: req.body.countryName,
            imageUpload: req.file.filename,
            blogPost: req.body.blogPost,
            hasCard: true
          },
          {
            where: {
              id: req.body.id
            }
          }
        )
        .then(() => {
          res.redirect("/main");
        });
    }
  );
  //app.delete("/api", isLoggedIn, controller.deleteCheckpoint);
};
//===========================================================
