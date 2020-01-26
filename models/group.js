module.exports = function (sequelize, DataTypes) {
  var Lunches = sequelize.define("Lunches", {
    name: DataTypes.STRING,
    restaurant: DataTypes.STRING
    //add stuff here
  });

  return Lunches;
};