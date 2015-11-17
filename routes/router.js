var express = require('express');
var router = express.Router();

/* GET markup */
router.get('*', function(req, res, next) {
  res.render('index', {
      title: 'Верстка, шлюхи, шаурма'
  });
});

module.exports = router;