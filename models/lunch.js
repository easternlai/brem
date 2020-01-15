module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("lunch", {
      // Giving the Author model a name of type STRING
      meetName: DataTypes.STRING,
      proposedFood: DataTypes.STRING
    });