(function (app) {
    'use strict';

    app.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: '/angular/Articles/_articles.html'
            //controller: 'articlesCtrl'
            // controllerAs: 'vm',
            // title: 'Login'
        })
        .when('/:page:[1-9]/:itemsPerPage[1-9]', {
           templateUrl: '/angular/Articles/_articles.html'
           //controller: 'articlesCtrl'
           // controllerAs: 'vm',
           // title: 'Login'
        })
        .when('/login', {
            templateUrl: '/angular/Login/_login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
            // title: 'Login'
        })
        .when('/article/create', {
            templateUrl: '/angular/CreateUpdateArticle/_createUpdateArticle.html',
            // controller: 'loginCtrl',
            // controllerAs: 'vm'
            // title: 'Login'
        })
        .when('/article/update/:id', {
            templateUrl: '/angular/CreateUpdateArticle/_createUpdateArticle.html',
            // controller: 'loginCtrl',
            // controllerAs: 'vm'
            // title: 'Login'
        })
            .otherwise(
            {
                redirectTo: '/'
            });
    }
})(angular.module('app'));
