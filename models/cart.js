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

    // Cart.associate = models => {
    //     Cart.hasMany(models.Item, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };


    return Cart;
};
