// Requiring necessary npm packages
require('dotenv').config()
const express = require("express");
const session = require("express-session");
const path = require('path');
const http = require('http');

// Requiring passport as we've configured it
const passport = require("./config/passport");

// Requiring from nodemailer
const nodemailer = require('nodemailer');
const cors = require('cors');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();

const httpServer = http.createServer(app);
// For http
if (process.env.NODE_ENV = "production") {
  httpServer.listen(80);
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/woodworking/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
app.use(cors());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
