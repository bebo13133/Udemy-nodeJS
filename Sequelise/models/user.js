const Sequelize= require('sequelize')
const sequelize= require('../util/database');

const User = sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING
})
module.exports = User;