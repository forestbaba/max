const Sequelize = require("sequelize");
const MoviesModel = require('./movie');
const MoviesAttr = require('./movie_att');
const settings = require("../config/settings");


const sequelize = new Sequelize(settings.mysql.DB, settings.mysql.USER,settings.mysql.PASSWORD, {
    host: settings.mysql.HOST,
    dialect: settings.mysql.dialect,
    operatorsAliases: false,
  
    pool: {
      max: settings.mysql.pool.max,
      min: settings.mysql.pool.min,
      acquire: settings.mysql.pool.acquire,
      idle: settings.mysql.pool.idle
    }
  });
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.movies = MoviesModel(sequelize, Sequelize);
db.moviesattr = MoviesAttr(sequelize, Sequelize);
module.exports = db;
