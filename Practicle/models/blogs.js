module.exports = (sequelize, DataTypes) => {
    const Blogs = sequelize.define('Blogs', {
        Title: DataTypes.STRING,
        Description: DataTypes.STRING,
        published_date: DataTypes.STRING,
        modify_date: DataTypes.STRING,
        type: {
            field: 'status',
            type: DataTypes.ENUM,
            values: ['Publish', 'Unpublish']
        },
        start_date: DataTypes.STRING,
        end_date: DataTypes.STRING,
        type: {
            field: 'recurrence',
            type: DataTypes.ENUM,
            values: ['Repeat', 'RepeatOn']
        },
    });

    Blogs.associate = function (models) {
        Blogs.hasMany(models.category, {
            foreignKey: "blog_id",
            targetKey: "id",
            as: "category",
            onDelete: "CASCADE"
        });
    };

    return Blogs;
};