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
})

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
);

router.get('/logout', function(req, res, next) {
    var controller = new ApiUserController(req, res, next);
    controller.logout();
});

module.exports = router;
