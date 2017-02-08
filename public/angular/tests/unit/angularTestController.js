(function (app) {
    'use strict';

    app.controller('angularTestController', loginCtrl);

    loginCtrl.$inject = ['$scope'];

    function loginCtrl($scope) {
        $scope.title = "test title";
    }
})(angular.module('app'));
