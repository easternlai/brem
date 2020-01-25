module.exports = function (sequelize, DataTypes) {
  var Orgs = sequelize.define("Orgs", {
    name: DataTypes.STRING
    //add stuff here
  });

  Orgs.associate = function (models) {
    Orgs.hasMany(models.User, {
      onDelete: "cascade"
    });
  };

  Orgs.associate = function (models) {
    Orgs.hasMany(models.Lunches, {
      onDelete: "cascade"
    });
  };

  return Orgs;
};