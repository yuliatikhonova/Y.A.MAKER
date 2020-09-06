module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define("post", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    itemPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    itemDescription: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imageUpload: {
      type: DataTypes.STRING
    }
  });

  return post;
};
