module.exports = function (sequelize, DataTypes) {
  var Lunches = sequelize.define("Lunches", {
    name: DataTypes.STRING,
    restaurant: DataTypes.STRING,
    host: DataTypes.STRING,
    type: DataTypes.STRING
    //add stuff here
  });

  return Lunches;
};