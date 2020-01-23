module.exports = function(sequelize, DataTypes) {
    var Group = sequelize.define("Group", {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      schedule: DataTypes.STRING,
      people: DataTypes.STRING,
      category: DataTypes.STRING
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