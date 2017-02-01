(function (app) {
    app.directive('createUpdateArticleForm', createUpdateArticleForm );

    createUpdateArticleForm.$inject = ['userService', 'articleService', '$routeParams', '$location'];

    function createUpdateArticleForm(userService, articleService, $routeParams, $location) {
      return {
        restrict: 'E',
        transclude: true,

          controller: function($scope, userService, $routeParams) {
            if($routeParams.id){

              $scope.isCreate = false;
              $scope.action = update;
              articleService.getDetails($routeParams.id).then(function(article){
                $scope.title = article.title;
                $scope.content = article.content;
                $scope.articleId = article._id;
                $scope.userId = article.user._id;
                $scope.userName = article.user.username;
              }
              );
            }
            else{
              $scope.action = create;
              userService.getCurrentUser().then(function(user){
                $scope.isCreate = true;
                $scope.title = '';
                $scope.content = '';
                $scope.articleId = '';
                $scope.userId = user.id;
                $scope.userName = user.name;
              })
            }

            $scope.error = '';            

            function create(){
              var model = {
                  articleId: $scope.articleId,
                  title: $scope.title,
                  content: $scope.content,
                  comments: [],
                  userId: $scope.userId,
                  userName: $scope.userName
              };

              articleService.create(model).then(function(data){
                $location.url('/');
              });
            }

            function update(){
              var model = {
                  articleId: $scope.articleId,
                  title: $scope.title,
                  content: $scope.content,
                  comments: [],
                  userId: $scope.userId,
                  userName: $scope.userName
              };

              articleService.update(model).then(function(data){
                  $location.url('/');
              });
            }

          },

          templateUrl: '/angular/Shared/PartialViews/createUpdateArticleForm.html'
      };
    };
})(angular.module('app.shared'));
