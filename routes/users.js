var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var coll = db.get('users');
  coll.find({}, {}, function(e, docs){
    res.render('users', {'users': docs});
  });
});

router.get('/signup', function(req, res, next) {
    res.render('signup', {title: 'Signup a New User'})
});

router.post('/signup', function(req, res, next){
    var db = req.db;
    var coll = db.get('users');

    var username = req.body.username;
    var password = req.body.password;

    coll.insert({
        "username": username,
        "password": password
    }, function (err, doc){
        if (err){
            res.send('Some problem occurs, plz try again');
        }
        else{
            res.redirect('/');
        }
    });
});

router.get('/login', function(req, res, next){
    res.render('login', {title: 'Login to use chatroom'});
});

router.post('/login', function(req, res, next){
    var db = req.db;
    var coll = db.get('users');

    var username = req.body.username;
    var password = req.body.password;

    coll.findOne({'username': username}, function(e, doc){
        if (doc.password == password) {
            req.session.username = username;
            res.redirect('/posts');
        }
        else {
            res.send('Invalid username or password, plz try again')
        }
    });
});

module.exports = router;
