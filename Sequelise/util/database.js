

const Sequelize = require('sequelize');

const sequelize= new Sequelize('node-complete', 'root', 'bebo840512',{dialect:'mysql',host:'localhost'});


module.exports = sequelize;

