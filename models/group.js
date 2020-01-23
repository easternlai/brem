module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
      name: DataTypes.STRING
      //add stuff here
    });
    Group.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Group.hasMany(models.userGroup, {
          onDelete: "cascade"
        });
      };
   
    return Group;
  };