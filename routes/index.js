var express = require('express');
var router = express.Router();
var fs = require('fs');
var util = require('util');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/csx-threats-and-controls', function(req, res, next) {
  res.render('threats-and-controls', { title: 'Express' });
});

router.get('/csx-threats-and-controls/:view', function(req, res, next) {
  res.render('threats-and-controls', { title: 'Express', view: req.params.view });
});

module.exports = router;
