(function (app) {
    app.directive('articles', articles );

    articles.$inject = ['userService', 'articleService', '$location'];

    function articles(userService, articleService, $location, $routeParams) {
      return {
        restrict: 'E',
        transclude: true,

          controller: function($scope, $routeParams, articleService) {

              var itemsPerPage = 10;
              var maxSize = 10;
              $scope.allArticlesSource =[];
              $scope.filterDataLength = [];
              $scope.loadArticles = loadArticles;
              $scope.delete = deleteArticle;

              $scope.searchText;

              init();
              
              function init() {
                  articleService.getArticlesTotal().then(function(total){
                      var pageCount = Math.ceil(total / itemsPerPage);

                      $scope.filterObj={
                          Page: 1,
                          ItemsPerPage: itemsPerPage,
                          Total: total,
                          PageCount: pageCount,
                          MaxSize: maxSize
                      };

                      if($routeParams.page){
                          $scope.filterObj.Page = $routeParams.page;
                      }

                      getAllArticles();
                  });

                  userService.getCurrentUser().then(function(data){
                      $scope.currentUser = data;
                      $scope.isUserAuth = $scope.currentUser ? true : false;
                  });   
              }              
              
              function getAllArticles() {
                  articleService.getAllArticles().then(function(data){
                      $scope.allArticlesSource = data;
                      loadArticles();
                  });
              }


            function deleteArticle(id){
                articleService.deleteArticle(id).then(function(data){                  
                  $scope.articles = $scope.articles.filter(function(el){
                    return el.article._id != id;
                  });                 
                });
            }

            function loadArticles(){
                var startPos = ($scope.filterObj.Page - 1) * $scope.filterObj.ItemsPerPage;
                $scope.articles = $scope.allArticlesSource.slice(startPos, startPos + $scope.filterObj.ItemsPerPage);

                // articleService.getArticles($scope.filterObj).then(function(data){
                //     $scope.articles = data;
                // });
            }
          },

          templateUrl: '/angular/Shared/PartialViews/articles.html'
      };
    };
})(angular.module('app.shared'));
