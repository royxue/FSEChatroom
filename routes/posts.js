var express = require('express');
var router = express.Router();

var moment = require('moment');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var coll = db.get('posts');
  coll.find({}, {}, function(e, docs){
    res.render('posts', {'posts': docs, 'usernow': req.session.username});
  });
});

router.post('/new', function(req, res, next) {
    var db = req.db;
    var coll = db.get('posts');

    var user = req.session.username;
    var content = req.body.content;
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');

    coll.insert({
        "user": user,
        "content": content,
        "time": time
    }, function(err, doc){
        if (err){
            res.send('Some problem occurs plz try agiain')
        }
        else {
            res.redirect('/posts');
        }
    });
});

module.exports = router;