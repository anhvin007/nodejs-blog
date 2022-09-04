const Post = require('../../config/models/Post.js');
const { multipleMongooseToObject } = require('../../util/mongoose.js');

class PostsController {
    // [GET]
    index(req, res, next) {
        Post.find({})
            .then(posts => {
                res.render('posts', { posts: multipleMongooseToObject(posts) });
            })
            .catch(res.next);
    }

    // [GET] /news/:slug
    detail(req, res) {
        res.render('posts-detail');
    }
}

module.exports = new PostsController();
