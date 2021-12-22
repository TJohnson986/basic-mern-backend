const express = require('express');
const getPosts = require('../controllers/getPosts.js');
const createPosts = require('../controllers/createPosts.js');
const updatePosts = require('../controllers/updatePosts.js');


const router = express.Router();

router.get('/', getPosts );
router.post('/', createPosts )
router.patch('/:id', updatePosts)

module.exports = router;