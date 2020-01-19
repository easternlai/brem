//XXXXXXXXXXXXXXXXX___AUTHENTICATION_XXXXXXXXXXXXXXXXXX
//use brypt to encrypt the password
var bcrypt = require("bryptjs");

//Create the User model
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("Users", {

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

    //create a User model that will check if the password entered matches that user's actual password
    User.prototype.validPassword = function(password)  {
      return bcrypt.compareSync(password, this.password);
    };

    //creates the link to user to their password
    User.addHook("beforeCreate", function(user)  {
      user.password = brypt.hashSync(user.password, brypt.genSaltSync(10), null);
    });
    return User;
};
//XXXXXXXXXXXXXXXXX___END AUTHENTICATION_XXXXXXXXXXXXXXXXXX