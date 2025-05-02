const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const userModel = (sequelize, DataTypes)=>{
    const User = sequelize.define("user",{
        username: {
            type : DataTypes.STRING
        },
        password : {
            type : DataTypes.STRING
        },
        email : {
            type : DataTypes.STRING
        }
    })
    return User
}

module.exports = userModel

