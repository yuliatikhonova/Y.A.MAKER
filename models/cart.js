module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        cartId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    });

    Cart.associate = models => {
        Cart.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    

    return Cart;
};