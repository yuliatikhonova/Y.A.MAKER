'use strict';//strict mode. 
const fs = require('fs');//package
const path = require('path');//package
const basename = path.basename(module.filename);//returns the last portion of a path
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];// connecting to config.json
const Sequelize = require("sequelize");
const db = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  //used to synchronously read the contents of a given directory. The method returns an array with all the file names or objects in the directory.
  .readdirSync(__dirname)

  //filter through 
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })

  //for each 
  .forEach(function (file) {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.items = require("./item.js")(sequelize, Sequelize);

module.exports = db;