module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      
      userName: DataTypes.STRING,
      email: DataTypes.STRING
    });
};
