module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        id: {
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

    Cart.associate = models => {
        Cart.hasMany(models.Item, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Cart;
};
// change so that items belong to the cart
// cart hasmany items
// cart belongs to user
// user hasOne cart