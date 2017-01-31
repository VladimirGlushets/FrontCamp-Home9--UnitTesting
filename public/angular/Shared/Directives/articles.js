(function (app) {
    app.directive('articles', articles );

    articles.$inject = ['userService', 'articleService'];

    function articles(userService, articleService) {
      return {
        restrict: 'E',
        transclude: true,

          controller: function($scope, userService, MenuItems) {



            userService.getCurrentUser().then(function(data){
              $scope.currentUser = data;
              $scope.isUserAuth = $scope.currentUser ? true : false;
            });

            articleService.getArticles().then(function(data){
              $scope.articles = data;
            });
          },

          templateUrl: '/angular/Shared/PartialViews/articles.html'
      };
    };
})(angular.module('app.shared'));
