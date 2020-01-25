module.exports = function(sequelize, DataTypes) {
    var Lunches = sequelize.define("Lunches", {
      name: DataTypes.STRING
      //add stuff here
    });
    // Lunches.associate = function(models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     Lunches.hasMany(models.userGroups, {
    //       onDelete: "cascade"
    //     });
    //   };


    // Lunches.associate = function(models) {
    //   Lunches.belongsTo(models.Orgs, {
    //       foreignKey: {
    //           allowNull: false
    //       }
    //   });

    //   Lunches.belongsToMany(models.Users, {
    //     through: 'userGroups',
    //     as:'users',
    //     foreignKey: 'userId' 
    //   });
    // };
   
    return Lunches;
  };