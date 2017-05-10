/**
 * Created by rishabhshukla on 10/05/17.
 */
module.exports = function (express,app) {
    var router = express.Router();

    router.get('/', function (req, res, next) {
        res.render('index',{title:'Chat-Zam'});
    });

    router.get('/chatrooms',function (req, res, next) {
        res.render('chatrooms',{title:'ChatRooms'});
    });

    router.get('/setcolor', function (req, res, next) {
        req.session.favColor = 'Red';
        res.send('Setting fav color!');
    });
    router.get('/getcolor', function (req, res, next) {
        res.send('Fav color: '+(req.session.favColor===undefined? 'Not found':req.session.favColor));
    });

    app.use('/',router);
};