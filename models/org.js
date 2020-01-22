module.exports = function(sequelize, DataTypes) {
    var org = sequelize.define("org", {
      
      companyName: DataTypes.STRING
    });
    
    return org;

  };
