const express = require('express');
const getPosts = require('../controllers/postNotes.js');
const createPosts = require('../controllers/postNotes.js');


const router = express.Router();

router.get('/', getPosts );
router.post('/', createPosts )

module.exports = router;