(function (app) {
    app.directive('topNavigation', topNavigation );

    topNavigation.$inject = ['userService', 'MenuItems'];

    function topNavigation(userService, MenuItems) {
      return {
        restrict: 'E',
        transclude: true,

          controller: function($scope, userService, MenuItems) {
            $scope.menuItems = MenuItems;

            userService.getCurrentUser().then(function(data){
              $scope.currentUser = data;
            });
          },

          templateUrl: '/angular/Shared/PartialViews/topNavigation.html'
      };
    };
})(angular.module('app.shared'));
