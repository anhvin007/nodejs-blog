const express = require('express');
const router = express.Router();
const postsController = require('../app/controllers/PostsController');

router.get('/:slug', postsController.detail);
router.get('/', postsController.index);

module.exports = router;
