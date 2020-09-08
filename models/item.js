module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("Item", {
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

  Item.associate = models => {
    Item.belongsTo(models.Cart, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Item;
};
