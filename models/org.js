module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("org", {
      
      companyName: DataTypes.STRING
    });
  }
