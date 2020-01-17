module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("groups", {
      
      groupName: DataTypes.STRING,
      proposedFood: DataTypes.STRING
    });

  }

