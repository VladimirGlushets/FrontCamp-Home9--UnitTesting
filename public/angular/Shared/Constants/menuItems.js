(function (app) {
    'use strict';

    var menuItems = [
      {name: 'Home', url:'/'}      
    ];

    app.constant('MenuItems', menuItems);

})(angular.module('app.shared'));
