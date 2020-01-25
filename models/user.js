var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
    });
    Users.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };    
    Users.addHook("beforeCreate", function(users) {
        users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
    });

    // Users.associate = function(models) {
    //     Users.belongsTo(models.Orgs, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    Users.associate = function(models) {

        Users.belongsTo(models.Orgs, {
            foreignKey: {
                allowNull: false
            }
        });

        Users.belongsToMany(models.Lunches, {
          through: 'userGroups',
          as:'lunches',
          foreignKey: 'lunchesId' 
        });
      };


    
    return Users;
};


