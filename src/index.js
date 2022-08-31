const express = require('express');
const path = require('path');
const port = 4000;
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

// HTTP logger
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});