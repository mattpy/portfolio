const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        name: 'Matt'
    });
});

router.get('/projects', (req, res, next) => {
    res.render('projects');
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

module.exports = router;