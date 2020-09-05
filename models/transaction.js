module.exports = (sequelize, DataTypes) => {
    const transaction = sequelize.define("transaction", {
        transactionId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false

        },
    });

    return transaction;
};