module.exports = function(sequelize, DataTypes) {
    var Org = sequelize.define("Org", {
      name: DataTypes.STRING
      //add stuff here
    });
   
    return Org;
  };