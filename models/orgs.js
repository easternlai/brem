module.exports = function(sequelize, DataTypes) {
  var Orgs = sequelize.define("Orgs", {
    
    companyName: DataTypes.STRING,
    domain: DataTypes.STRING
  });
};
