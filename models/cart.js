module.exports = (sequelize, DataTypes) => {
    const cart = sequelize.define("cart", {
        cartId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    });

    cart.associate = models => {
        cart.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    cart.associate = models => {
        cart.hasMany(models.Item, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return cart;
};