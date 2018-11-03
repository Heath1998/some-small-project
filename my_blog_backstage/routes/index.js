var express = require('express');
var router = express.Router();
const fs = require('fs');
const marked = require('marked');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//获取点赞数
var favour = 1
router.get('/api/getfavour', function(req, res, next) {
  var mid = favour
  res.json({
    favour: mid
  })
})

//增加点赞数
router.get('/api/addfavour', function(req, res, next) {
  favour = favour + 1
  res.json({
    success:true
  })
})


//返回文章html
const template = "<div class='vs'>{{{content}}}</div>";
router.get('/api/article', function(req, res, nex) {
  
  var filePath = './public/article/savemd/' + req.query.aid + '.md'
  console.log(filePath)
  var htmlStr = fs.readFileSync(filePath, 'utf8')
   htmlStr = marked(htmlStr);
  // var css = fs.readFileSync( './public/static/github.css', 'utf8')
  // htmlStr = template.replace('{{{content}}}', htmlStr).replace('{{{styles}}}', css);
  htmlStr = template.replace('{{{content}}}', htmlStr);
  res.json({
    html:htmlStr
  })
})


module.exports = router;
