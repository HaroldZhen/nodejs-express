const express = require('express')
const router = express.Router()
const postsController = require('../../controllers/postsController')

// GET: /posts/
router.get('/', postsController.getPosts)
router.post('/', postsController.addPost)
router.delete('/', postsController.delAllPosts)
router.delete('/:id', postsController.delPost)
router.patch('/:id', postsController.updatePost)

module.exports = router
