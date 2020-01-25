module.exports = function (sequelize, DataTypes) {
    var userGroups = sequelize.define("userGroups", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING
    });

    // userGroups.associate = function(models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     userGroups.belongsTo(models.Lunches, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };
    return userGroups;

};

