const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/', controllers.createBlog)
router.get('/', controllers.getAllBlog)
router.get('/:id', controllers.getBlogById)
router.put('/:id', controllers.updateBlog)
router.delete('/:id', controllers.deleteBlog)

module.exports = router