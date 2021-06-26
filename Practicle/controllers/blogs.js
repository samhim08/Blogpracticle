const { Blogs } = require('../models');

const createBlog = async (req, res) => {
    try {
        const blog = await Blogs.create(req.body);
        return res.status(201).json({
            blog,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
const getAllBlog = async (req, res) => {
    try {
        const blogs = await Blogs.findAll({
            // include: [
            //     {
            //         model: Project
            //     }
            // ]
        });
        return res.status(200).json({ blogs });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blogs.findOne({
            where: { id: id },
            // include: [
            //     {
            //         model: Project
            //     }
            // ]
            
        });
        if (blog) {
            return res.status(200).json({ blog });
        }
        return res.status(404).send('Blog with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Blogs.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedBlog = await Blogs.findOne({ where: { id: id } });
            return res.status(200).json({ blog: updatedBlog });
        }
        throw new Error('Blog not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Blogs.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Blog deleted");
        }
        throw new Error("Blog not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog
}