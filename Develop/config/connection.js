require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize("test", "root", "AAnimaLL1994", {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
