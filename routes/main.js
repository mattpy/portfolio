const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {
        path: '/',
        homeActive: 'active'
    });
});

router.get('/projects', (req, res, next) => {
    res.render('projects', {
        path: '/projects',
        projectsActive: 'active'
    });
});

module.exports = router;