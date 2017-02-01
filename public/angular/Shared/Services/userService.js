(function (app) {
    'use strict';

    app.service('userService', userService);

    userService.$inject = ['$http', 'ApiRoutes'];

    function userService($http, apiRoutes) {
        var self = this;

        self.getCurrentUser = getCurrentUser;
        self.login = login;
        self.logout = logout;
        self.createUser = createUser;

        function getCurrentUser(){
          return $http.get(apiRoutes.GetCurrentUser).then(extractData);
        }

        function login(user){          
          return $http.post(apiRoutes.Login, user).then(extractData);
        }

        function logout(){
          return $http.get(apiRoutes.Logout).then(extractData);
        }

        function createUser(){
          return $http.get(apiRoutes.CreateUser).then(extractData);
        }

        function extractData(res) {
            return res.data;
        }
    };
})(angular.module('app.shared'));
