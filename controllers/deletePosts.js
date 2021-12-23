const PostMessage = require("../models/postNoteMessage");
const mongoose = require('mongoose');

const deletePosts = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' })
}

module.exports = deletePosts;