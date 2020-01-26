module.exports = function (sequelize, DataTypes) {
    var userLunches = sequelize.define("userLunches", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        name: DataTypes.STRING,
        userxId: DataTypes.INTEGER,
        lunchxId: DataTypes.INTEGER
    });

    // userLunches.associate = function(models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     userLunches.belongsTo(models.Lunches, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   };

    return userLunches;

};

