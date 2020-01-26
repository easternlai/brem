module.exports = function (sequelize, DataTypes) {
  var Lunches = sequelize.define("Lunches", {
    name: DataTypes.STRING,
    restaurant: DataTypes.STRING,
    host: DataTypes.STRING,
    //giphy requires "type" to work. please don't delete
    type: DataTypes.STRING
    //add stuff here
  });

  // Lunches.associate = function(models) {
    
  //   Lunches.hasMany(models.userLunches, {
  //     onDelete: "cascade"
  //   });
  // };

  return Lunches;
};