module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
        Title: DataTypes.STRING
    });

    return category;
};