/**
 * Created by rishabhshukla on 10/05/17.
 */
 var express = require('express');
 var app = express();
 var path = require('path');
 var hogan = require('hogan-express');

 app.set('views',path.join(__dirname, 'views'));
 app.engine('html', hogan);
 app.set('view engine','html');
 app.use(express.static(path.join(__dirname,'public')));

 app.route('/').get(function (req, res, next) {
  // res.send('<h1> hello world </h1>');
     res.render('index',{title:'Chat-Zam'});
 });

 app.listen(3100, function () {
     console.log('Server running on port 3000');
 });