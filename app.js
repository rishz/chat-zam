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
 var connectMongo = require('connect-mongo')(session);
 var mongoose = require('mongoose').connect(config.dbURL);

 var env = process.env.NODE_ENV || 'development';

if(env==='development'){
    console.log(config.sessionSecret);
    app.use(cookieParser());
    app.use(session({secret:config.sessionSecret, saveUninitialized:true, resave:true}));

}else{
    app.use(cookieParser());
    app.use(session({
        secret:config.sessionSecret,
        store: new connectMongo({
            // url:config.dbURL,
            mongooseConnection: mongoose.connection,
            stringify: true
        })
    }));
}

// var userSchema = mongoose.Schema({
//  username: String,
//     password: String,
//     fullname: String
// });
//
// var Person = mongoose.model('users',userSchema);
// var John = new Person({
//  username: 'johndoe',
//     password: 'john123',
//     fullname: 'John Doe'
// });

// John.save(function (err) {
//     console.log('Done!!')
// });

app.set('views',path.join(__dirname, 'views'));
 app.engine('html', hogan);
 app.set('view engine','html');
 app.use(express.static(path.join(__dirname,'public')));
 routes(express,app);

 app.listen(3100, function () {
     console.log('Server running on port 3000');
     console.log(env)
 });