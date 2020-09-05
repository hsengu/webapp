var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hok S. Uy' });
});

router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'Hok S. Uy - About Me' });
});

module.exports = router;
