const PostMessage = require("../models/postNoteMessage");
const mongoose = require('mongoose');

const likePosts = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 },{ new: true })

    res.json(updatedPost);
};

module.exports = likePosts;