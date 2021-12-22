const express = require('express');
const getPosts = require('../controllers/getPosts.js');
const createPosts = require('../controllers/createPosts.js');


const router = express.Router();

router.get('/', getPosts );
router.post('/', createPosts )

module.exports = router;