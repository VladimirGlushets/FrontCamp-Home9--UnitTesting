(function (app) {

    app.controller('CreateUpdateArticleFormController', CreateUpdateArticleFormController);

    CreateUpdateArticleFormController.$inject = ['$scope', 'userService', 'articleService', '$routeParams', '$location'];

    function CreateUpdateArticleFormController($scope, userService, articleService, $routeParams, $location) {

        userService.getCurrentUser().then(function (user) {
            if (!user) {
                $location.url('/login');
            }
            else {
                if ($routeParams.id) {

                    $scope.isCreate = false;
                    $scope.action = update;
                    articleService.getDetails($routeParams.id).then(function (article) {
                            $scope.title = article.title;
                            $scope.content = article.content;
                            $scope.articleId = article._id;
                            $scope.userId = article.user._id;
                            $scope.userName = article.user.username;
                        }
                    );
                }
                else {
                    $scope.action = create;
                    userService.getCurrentUser().then(function (user) {
                        $scope.isCreate = true;
                        $scope.title = '';
                        $scope.content = '';
                        $scope.articleId = '';
                        $scope.userId = user.id;
                        $scope.userName = user.name;
                    })
                }
            }
        });

        $scope.error = '';

        function create() {
            var model = {
                articleId: $scope.articleId,
                title: $scope.title,
                content: $scope.content,
                comments: [],
                userId: $scope.userId,
                userName: $scope.userName
            };

            articleService.create(model).then(function (data) {
                $location.url('/');
            });
        }

        function update() {
            var model = {
                articleId: $scope.articleId,
                title: $scope.title,
                content: $scope.content,
                comments: [],
                userId: $scope.userId,
                userName: $scope.userName
            };

            articleService.update(model).then(function (data) {
                $location.url('/');
            });
        }

    };

    app.directive('createUpdateArticleForm', createUpdateArticleForm);

    createUpdateArticleForm.$inject = [];

    function createUpdateArticleForm() {
        return {
            restrict: 'E',
            transclude: true,

            controller: CreateUpdateArticleFormController,

            // templateUrl: '/angular/Shared/PartialViews/createUpdateArticleForm.html'
            template: [

                '<div class="content-container">',
                '<div class="article-container">',
                '<form ng-submit="action()" role="form">',
                '<input type="hidden" name="articleId" ng-model="articleId" value="{{articleId}}">',
                '<input type="hidden" name="userId" ng-model="userId" value="{{userId}}">',
                '<input type="hidden" name="userName" ng-model="userName" value="{{userName}}">',
                '<div class="author">Title:</div>',
                '<input type="text" name="title" id="title" class="form-control" ng-model="title" required />',
                '<span ng-show="form.title.\$error.required" class="help-block">Title is required</span>',
                '<div class="author">Article Content:<div>',
                '<textarea rows="4" cols="50" type="text" name="content" id="content" ng-model="content" required minlength="20"></textarea><br>',
                '<span ng-show="form.content.$dirty && form.content.$error.required" class="help-block">Content is required</span>',
                '<input class="create-btn" type="submit" value="{{ isCreate ? \'Create\' : \'Update\' }}">',
                '</form>',
                '</div>',
                '</div>'
            ].join('')

        }
    };

})(angular.module('app.shared'));
