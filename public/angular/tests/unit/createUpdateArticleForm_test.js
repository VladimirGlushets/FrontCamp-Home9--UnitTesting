describe('Testing createUpdateArticleForm directive', function(){

  describe('Testing directive controller', function(){

    var   $scope,
          $controller,
          $q,
          $location,
          getCurrentUserDefer,
          createArticleDefer,
          updateArticleDefer,
          getDetailsArticleDefer,
          userServiceMock,
          articleServiceMock,
          articleService,
          location,
          user,
          newArticle,
          createController,
          CreateUpdateArticleFormController;

      beforeEach(angular.mock.module('app'));

      beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_, _$location_, _$q_) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        $q = _$q_;
        $location = _$location_;

        user = {
          id: 1,
          name: 'testuser'
        };

        newArticle={
          _id: 1,
          title: 'title',
          content: 'content',
          comments: [],
          user: {
              _id: '1',
              username: 'userName'
          }
        };

        userServiceMock = {
            getCurrentUser: function() {
              getCurrentUserDefer = $q.defer();
              return getCurrentUserDefer.promise;
           }
        };

        articleServiceMock = {
          create: function(model) {
              createArticleDefer = $q.defer();
              return createArticleDefer.promise;
          },
          update: function(model) {
             updateArticleDefer = $q.defer();
             return updateArticleDefer.promise;
          },
          getDetails: function(id) {
            getDetailsArticleDefer = $q.defer();
            return getDetailsArticleDefer.promise;
         }
        };

        createController = function(routeParams){
          return $controller('CreateUpdateArticleFormController', {
                $scope: $scope,
                userService: userServiceMock,
                articleService: articleServiceMock,
                $routeParams: routeParams,
                $location: $location
              });
        };

        spyOn(userServiceMock, "getCurrentUser").and.callThrough();
        spyOn(articleServiceMock, "create").and.callThrough();
        spyOn(articleServiceMock, "update").and.callThrough();
        spyOn(articleServiceMock, "getDetails").and.callThrough();

      }));

        it('Controller should be defined', function() {
          var controller = createController({});
          expect(controller).toBeDefined();
        });

        it('Current user is null', function() {
          var controller = createController({});

          getCurrentUserDefer.resolve(null);
          $scope.$apply();

          expect(userServiceMock.getCurrentUser).toHaveBeenCalled();
          expect($location.path()).toBe('/login');
        });

        it('Current user is not null and $routeParams.id null', function() {

          var controller = createController({id: null});

          getCurrentUserDefer.resolve(user);
          $scope.$apply();

          getCurrentUserDefer.resolve(user);
          $scope.$apply();

          expect(userServiceMock.getCurrentUser).toHaveBeenCalled();
          expect($scope.isCreate).toBe(true);
          expect($scope.title).toBe('');
          expect($scope.content).toBe('');
          expect($scope.articleId).toBe('');
          expect($scope.userId).toBe(user.id);
          expect($scope.userName).toBe(user.name);
        });

        it('Current user is not null and $routeParams.id not null', function() {

          var controller = createController({id: 1});

          getCurrentUserDefer.resolve(user);
          $scope.$apply();

          getDetailsArticleDefer.resolve(newArticle);
          $scope.$apply();

          expect(userServiceMock.getCurrentUser).toHaveBeenCalled();
          expect(articleServiceMock.getDetails).toHaveBeenCalled();
          expect($scope.isCreate).toBe(false);
          expect($scope.title).toBe(newArticle.title);
          expect($scope.content).toBe(newArticle.content);
          expect($scope.articleId).toBe(newArticle._id);
          expect($scope.userId).toBe(newArticle.user._id);
          expect($scope.userName).toBe(newArticle.user.username);
        });

        it('Action is Update', function() {
          var controller = createController({id: 1});

          getCurrentUserDefer.resolve(user);
          $scope.$apply();

          getDetailsArticleDefer.resolve(newArticle);
          $scope.$apply();

          $scope.action();

          updateArticleDefer.resolve();
          $scope.$apply();

          expect(userServiceMock.getCurrentUser).toHaveBeenCalled();
          expect(articleServiceMock.getDetails).toHaveBeenCalled();
          expect(articleServiceMock.update).toHaveBeenCalled();
          expect($location.path()).toBe('/');
        });

        it('Action is Create', function() {

          var controller = createController({});

          getCurrentUserDefer.resolve(user);
          $scope.$apply();

          getCurrentUserDefer.resolve(user);
          $scope.$apply();

          $scope.action();

          createArticleDefer.resolve();
          $scope.$apply();

          expect(userServiceMock.getCurrentUser).toHaveBeenCalled();
          expect(articleServiceMock.create).toHaveBeenCalled();
          expect($location.path()).toBe('/');
        });
  });
});
