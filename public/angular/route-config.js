(function (app) {
    'use strict';

    app.config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: '/Scripts/app/js/Login/_login.html',
                controller: 'loginCtrl',
                controllerAs: 'vm',
                title: 'Login'
            })
            .when('/devices/:page', {
                templateUrl: '/Scripts/app/js/Devices/_devices.html',
                controller: 'devicesCtrl',
                controllerAs: 'vm',
                title: 'Devices'
            })
            .when('/device/:id', {
                templateUrl: '/Scripts/app/js/Details/_details.html',
                controller: 'detailsCtrl',
                controllerAs: 'vm',
                title: 'Device'
            })
            .when('/settings',
            {
                templateUrl: '/Scripts/app/js/Settings/_settings.html',
                controller: 'settingsCtrl',
                controllerAs: 'vm',
                title: 'Settings'
            })
            .when('/manager',
            {
                templateUrl: '/Scripts/app/js/Manager/_manager.html',
                controller: 'managerCtrl',
                controllerAs: 'vm',
                title: 'Manager'
            })
            .when('/my-requests',
            {
                templateUrl: '/Scripts/app/js/MyRequests/_myRequests.html',
                title: 'My requests'
            })
            .when('/users',
            {
                templateUrl: '/Scripts/app/js/User/usersRolesEdit.html',
                title: 'Users roles edit',
                controller: 'usersRolesCtrl',
                controllerAs: 'vm'
            })
            .otherwise(
            {
                redirectTo: '/devices/all'
            });
    }
})(angular.module('app'));
