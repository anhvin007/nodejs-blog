const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', Post);
