var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.username){
    res.redirect('/posts');
  }
  res.render('index', { title: 'FSEChatroom' });
});

router.get('/force', function(req, res, next) {
  res.render('starwars', { title: 'Starwars' });
});

module.exports = router;
