module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("users", {
      
      userName: DataTypes.STRING,
      email: DataTypes.STRING
    });
}
