module.exports = function (sequelize, DataTypes) {
    var userGroup = sequelize.define("userGroup", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING
    });

    userGroup.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        userGroup.belongsTo(models.Group, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return userGroup;

};

