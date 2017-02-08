var express = require('express');
var router = express.Router();
var ApiUserController = require('../../controllers/api/apiUserController');
var passport = require('passport');

/* GET /api/users */
router.get('/current', function(req, res, next) {
    var controller = new ApiUserController(req, res, next);
    controller.getCurrentUser();
});

router.post('/create', function(req, res, next) {
    var controller = new ApiUserController(req, res, next);
    controller.createUser(req.body);
});

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/#!/login'
    })
);

// router.post('/login',
//     passport.authenticate('local'),
//     function(req, res) {
//         var host = req.get('host');
//         var path = host + '/';
//         console.log(path);
//         //res.redirect(path);
//         res.writeHead(303, {
//             'Location': path ,
//             'Method': 'GET'     // TODO: how to change Method to Get?
//         });
//         res.end();
//
// });

router.get('/logout', function(req, res, next) {
    var controller = new ApiUserController(req, res, next);
    controller.logout();
});

module.exports = router;
