module.exports = function(sequelize, DataTypes) {
    var Groups = sequelize.define("Groups", {
      
      groupName: DataTypes.STRING,
      proposedFood: DataTypes.STRING
    });

  };

