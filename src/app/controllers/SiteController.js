const Post = require('../../config/models/Post.js');

class SiteController {
    // [GET] /
    home(req, res) {
        Post.find({}, function (err, post) {
            if (!err) res.json(post);
            else res.status(400).json({ err: 'ERROR!!!' });
        });
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
