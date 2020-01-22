module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
      
      name: DataTypes.STRING

    });

    Group.associate = function(models) {
      // Associating Group with Posts
      // When an Group is deleted, also delete any associated Posts
      Group.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };


    return Group;
  };

