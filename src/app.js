const path = require('path');
const express = require('express');
const hbs = require('hbs');

const mainRoutes = require('../routes/main');

// Setup static HTML path and partials path for Handlebars
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup port for either local development or Heroku
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'hbs');
app.set('views', './templates/views');
hbs.registerPartials(partialsPath);

app.use(mainRoutes);

app.get('*', (req, res, next) => {
    res.redirect('/');
})

app.listen(port, () => {
    console.log('Server running on port ' + port);
});