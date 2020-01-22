module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
      
      userName: DataTypes.STRING,
      email: DataTypes.STRING
    });

    return user;
};
