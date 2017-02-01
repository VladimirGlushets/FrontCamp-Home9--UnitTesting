(function (app) {
    app.directive('articles', articles );

    articles.$inject = ['userService', 'articleService', '$location'];

    function articles(userService, articleService, $location) {
      return {
        restrict: 'E',
        transclude: true,

          controller: function($scope) {

            userService.getCurrentUser().then(function(data){
              $scope.currentUser = data;
              $scope.isUserAuth = $scope.currentUser ? true : false;
            });

            articleService.getArticles().then(function(data){
              $scope.articles = data;
            });

            $scope.delete = deleteArticle;

            function deleteArticle(id){
                articleService.deleteArticle(id).then(function(data){
                  console.log(data);
                  console.log($scope.articles);
                  $scope.articles = $scope.articles.filter(function(el){
                    return el.article._id != id;
                  });
                  console.log($scope.articles.length);
                  //$scope.articles = arr;
                    // $location.url('/');
                });
            }
          },

          templateUrl: '/angular/Shared/PartialViews/articles.html'
      };
    };
})(angular.module('app.shared'));
