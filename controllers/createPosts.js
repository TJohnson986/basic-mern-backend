const PostMessage = require('../models/postNoteMessage.js');

const createPosts = async (req, res) => {
    const post = req.body;

    const newPostNote = new PostMessage(post);
    console.log('newPostNote', newPostNote)

    try {
        await newPostNote.save();

        res.status(201).json(newPostNote);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
};

module.exports = createPosts;