const PostMessage = require('../models/postNoteMessage.js');

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        
        res.status(200).json(postMessages);

    } catch (error) {

        res.status(404).json({ message: error.message })

    }
};

const createPosts = async (req, res) => {
    const post = req.body;

    const newPostNote = new PostMessage(post);

    try {
        await newPostNote.save();

        res.status(201).json(newPostNote);
    }   catch (error) {
        res.status(409).json({ message: error.message })
    }
};

module.exports = getPosts, createPosts;