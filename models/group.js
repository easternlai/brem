module.exports = function (sequelize, DataTypes) {
  var Lunches = sequelize.define("Lunches", {
    name: DataTypes.STRING,
    restaurant: DataTypes.STRING
    //add stuff here
  });

  Lunches.associate = function (models) {
    Lunches.belongsTo(models.Orgs, {
      foreignKey: {
        allowNull: true,
        defaultValue: 1

      }
    });

    Lunches.belongsToMany(models.User, {
      through: 'userLunches',
      as: 'user',
      foreignKey: 'userId'
    });
  };
  return Lunches;
};