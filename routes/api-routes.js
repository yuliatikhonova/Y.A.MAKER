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

const nodemailer = require('nodemailer');

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/uploads",
    filename: function (req, file, cb) {
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
const item = require("../models/item");
cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});

module.exports = function (app) {
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

  //===========================================================Form to send to the email

  app.post('/api/form', (req, res) => {
    let data = req.body;
    console.log(data);
    let smtpTransport = nodemailer.createTransport({
      service: process.env.SERVICE || "Gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
      }
    })

    let mailOptions = {
      from: data.email,
      to: process.env.USER,
      subject: `Message from ${data.name}`,


      html: `
        <h3> Information </h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Phone number: ${data.phone}</li>
                <li>Email: ${data.email}</li>
            </ul>

            <h3>Message</h3>
            <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {

      if (error) {
        res.send(error)
      }
      else {
        res.send("Success" + response)
      }
    });

    smtpTransport.close();

  })

  //===========================================================Adding to bucket list

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.json({ error: "401:Not authenticated" });
  }

  app.get("/", (req, res) => {
    res.send("Welcome to the api!");
  });

  app.post(
    "/api/post",
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
        .create(
          {
            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            imageUpload: req.file.filename,
            itemDescription: req.body.itemDescription
          }
        )
    }
  );
  //app.delete("/api", isLoggedIn, controller.deleteCheckpoint);



  //routes for cart/checkout===================================
    app.get("/api/cart", (req, res) => {
      db.cart.findAll({where: {UserId: req.userId}})
      .then(data=> {
        res.json(data);
      });
    });

    app.post("/api/cart", (req, res) =>{
      db.cart.create({
        UserId: User.id,
        ItemId: Item.id
      })
    })

};
//===========================================================
