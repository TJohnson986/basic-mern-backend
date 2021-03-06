const express = require('express');
const getPosts = require('../controllers/getPosts.js');
const createPosts = require('../controllers/createPosts.js');
const updatePosts = require('../controllers/updatePosts.js');
const deletePosts = require('../controllers/deletePosts.js');
const likePosts = require('../controllers/likePosts.js');


const router = express.Router();

router.get('/', getPosts );
router.post('/', createPosts )
router.patch('/:id', updatePosts)
router.delete('/:id', deletePosts)
router.patch('/:id/likePost', likePosts)

module.exports = router;