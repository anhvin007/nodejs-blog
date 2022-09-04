const newsRoute = require('./news');
const postsRoute = require('./posts')
const siteRoute = require('./site');

function route(app) {
    app.post('/search', (req, res) => {
        res.send('');
        console.log(req.body);
    });

    app.use('/news', newsRoute);

    app.use('/posts', postsRoute);

    app.use('/', siteRoute);
}

module.exports = route;
