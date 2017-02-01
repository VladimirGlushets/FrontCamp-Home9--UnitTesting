(function (app) {
    'use strict';

    var apiRoutes = {
        'GetCurrentUser': './api/users/current',
        'Login': './api/users/login',
        'Logout': './api/users/logout',
        'CreateUser': './api/users/create',


        'GetAllArticles': '/api/articles',
        'ArticleDetails': '/api/articles/',
        'ArticleCreate': '/api/articles/',
        'ArticleUpdate': '/api/articles/',
        'ArticleDelete': '/api/articles/'
    };

    app.constant('ApiRoutes', apiRoutes);

})(angular.module('app.shared'));
