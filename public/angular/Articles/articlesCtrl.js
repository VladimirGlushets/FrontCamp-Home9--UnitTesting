(function (app) {
    'use strict';

    app.controller('articlesCtrl', articlesCtrl);

    articlesCtrl.$inject = ['$location', 'userService', 'ApiRoutes'];

    function articlesCtrl($location, userService) {

    }
})(angular.module('app'));
