const newsRoute = require('./news');
const siteRoute = require('./site');

function route(app) {
    app.post('/search', (req, res) => {
        res.send('');
        console.log(req.body);
    });

    app.use('/news', newsRoute);

    app.use('/', siteRoute)
                    }

module.exports = route;
