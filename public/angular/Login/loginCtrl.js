(function (app) {
    'use strict';

    app.controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$location', 'userService', 'ApiRoutes'];

    function loginCtrl($location, userService) {

        var vm = this;

        vm.dataLoading = false;
        vm.email = '';
        vm.password = '';
        vm.error = '';

        vm.login = login;
        vm.logout = logout;

        function login() {
            vm.dataLoading = true;
            var user = {email: vm.email, password: vm.password};

            userService.login(user).then(function (response) {
                    $location.path('/');
                });
        };


        function logout() {

        }
    }
})(angular.module('app'));
