module.exports = function (sequelize, DataTypes) {
    var userLunches = sequelize.define("userLunches", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING
    });

    return userLunches;

};

