const db = require("../models");
const Item = db.items;
const Op = require('sequelize');
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

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});

// Create and Save a new Item
exports.create = [
  upload.single("imageUpload"),
  uploadcdny,
  (req, res) => {
    // Validate request
    if (!req.body.itemName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
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

    // Create a Item
    const item = {
      itemName: req.body.itemName,
      itemPrice: req.body.itemPrice,
      itemDescription: req.body.itemDescription,
      imageUpload: req.file.filename
    };

    // Save Item in the database
    Item.create(item)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Item."
        });
      });
  }
];

// Retrieve all Items from the database.
exports.findAll = (req, res) => {
  const itemName = req.query.itemName;
  var condition = itemName ? { itemName: { [Op.like]: `%${itemName}%` } } : null;

  Item.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Item with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Item.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Item with id=" + id
      });
    });
};

// Update a Item by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Item.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Item was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Item with id=${id}. Maybe Item was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Item with id=" + id
      });
    });
};

// Delete a Item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Item.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Item was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Item with id=${id}. Maybe Item was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Item with id=" + id
      });
    });
};