module.exports = function(sequelize, DataTypes) {
    var userGroups = sequelize.define("usersGroups", {
         
        usersID: DataTypes.INTEGER,
        groupsID: DataTypes.INTEGER    

    });
};
