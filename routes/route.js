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

    app.use('/',router);
};