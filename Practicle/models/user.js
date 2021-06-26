


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        type: {
            field: 'role',
            type: DataTypes.ENUM,
            values: ['admin', 'user']
        }
    });

    User.associate = function (models) {
        User.hasMany(models.blogs, {
            foreignKey: "user_id",
            targetKey: "id",
            as: "user_blogs",
            onDelete: "CASCADE"
        });
    };

    return User;
};