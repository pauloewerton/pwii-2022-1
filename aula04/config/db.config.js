const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config();

const url = process.env.DATABASE_URL;
const sequelize = new Sequelize(url);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contato = require('../models/contato')(sequelize, Sequelize);
db.user = require('../models/user')(sequelize, Sequelize);

db.sync = async() => {
  await sequelize.sync();
};

module.exports = db;
