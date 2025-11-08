var express = require('express');
var router = express.Router();

/* for get home page e.t.c. */

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    layout: 'layout'
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About Me',
    layout: 'layout'
  });
});


router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects',
    layout: 'layout'
  });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Me',
    layout: 'layout'
  });
});

module.exports = router;
