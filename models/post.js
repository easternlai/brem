//Post is usersGroup

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // title is the name who want to join
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    // body is where user can type in comment
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.Group, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
