
class SiteController {
    // [GET] /
    home(req, res, next) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
