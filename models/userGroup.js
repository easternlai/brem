module.exports = function (sequelize, DataTypes) {
    var userLunches = sequelize.define("userLunches", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // }, for many to many
        name: DataTypes.STRING,
        userxId: DataTypes.INTEGER,
        lunchxId: DataTypes.INTEGER
    });

    return userLunches;

};

