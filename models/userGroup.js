module.exports = function (sequelize, DataTypes) {
    var userLunches = sequelize.define("userLunches", {

        name: DataTypes.STRING,
        userxId: DataTypes.INTEGER,
        lunchxId: DataTypes.INTEGER
    });

    return userLunches;

};

