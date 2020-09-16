module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    });

    Cart.associate = models => {
        Cart.belongsTo(models.Item, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Cart;
};
