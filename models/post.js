module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define("post", {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    countryName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    blogPost: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imageUpload: {
      type: DataTypes.STRING
    },
    hasCard: {
      type: DataTypes.BOOLEAN,
      value: false
    }
  });

  post.associate = models => {
    post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return post;
};
