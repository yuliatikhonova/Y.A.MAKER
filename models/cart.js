module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        UserId: {
            type: DataTypes.INTEGER,
        }
    });

    

    // Cart.associate = models => {
    //     Cart.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: true
    //         }
    //     });
    // };

    return Cart;
};
