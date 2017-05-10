/**
 * Created by rishabhshukla on 10/05/17.
 */
 var express = require('express');
 var app = express();
 var path = require('path');
 var hogan = require('hogan-express');
 var routes = require('./routes/route.js');
 var cookieParser = require('cookie-parser');
 var session = require('express-session');
 var config = require('./config/config.js');

var env = process.env.NODE_ENV || 'development';

app.set('views',path.join(__dirname, 'views'));
 app.engine('html', hogan);
 app.set('view engine','html');
 app.use(express.static(path.join(__dirname,'public')));
 app.use(cookieParser());
 routes(express,app);
if(env==='development'){
    app.use(session({secret:config.sessionSecret, saveUninitialized:true, resave:true}));

}else{
    app.use(session({secret:config.sessionSecret, saveUninitialized:true, resave:true}));

}
 app.listen(3100, function () {
     console.log('Server running on port 3000');
     console.log(env)
 });