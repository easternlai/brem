//use brypt to encrypt the password
var bcrypt = require("bryptjs");

//Create the User model
module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {

      //email cannot be null and a real email address must be used
      email:  {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },

      //password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    
      
};
