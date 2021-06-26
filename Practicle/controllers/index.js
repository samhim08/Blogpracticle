const {
    login
} = require('./auth');

const {
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog
} = require('./blogs');

module.exports = {
    login,
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog
}