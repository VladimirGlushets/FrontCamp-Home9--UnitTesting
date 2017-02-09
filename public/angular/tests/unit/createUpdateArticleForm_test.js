describe('Testing createUpdateArticleForm directive', function(){

  describe('Testing directive controller', function(){

    var $compile,
          $scope,
          $rootScope,
          $controller,
          $q,
          //directiveElem,
          //directiveController,
          //directiveScope,
          //userService,
          getArticleDefer,
          userServiceMock,
          articleServiceMock,
          routeParams,
          articleService,
          location,
          CreateUpdateArticleFormController;

        // Before each test load bloglog module
      beforeEach(angular.mock.module('app'));

      beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_, _$controller_, $location, $routeParams, _$q_ ) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $scope = $rootScope.$new();
        $q = _$q_;

        userServiceMock = {
            getCurrentUser: function() {
              getArticleDefer = $q.defer();
              return getArticleDefer.promise;
           }
        };

        articleServiceMock = {
            create: function(model) {
              getArticleDefer = $q.defer();
              return getArticleDefer.promise;
           }
        };

        CreateUpdateArticleFormController = $controller('CreateUpdateArticleFormController', {
              $scope: $scope,
              userService: userServiceMock,
              articleService: articleServiceMock,
              $routeParams: $routeParams,
            });

        spyOn(userServiceMock, "getCurrentUser").and.callThrough();
        spyOn(articleServiceMock, "create").and.callThrough();
        //spyOn(CreateUpdateArticleFormController, "create").and.callThrough();
        //directiveElem = getCompiledElement();
      }));

      // function getCompiledElement() {
      //   var element = angular.element('<create-update-article-form></create-update-article-form>');
      //   var compiledElement = $compile(element)($scope);
      //   directiveScope = compiledElement.isolateScope() || compiledElement.scope();
      //   $scope.$digest();
      //   directiveController = compiledElement.controller("createUpdateArticleForm");
      //
      //   return compiledElement;
      // }

      // it('Paging directive should be defined', function() {
      //     expect(directiveElem).toBeDefined();
      //   });

        it('Controller should be defined', function() {
            expect(CreateUpdateArticleFormController).toBeDefined();
        });

        it('Controller check ', function() {
          $scope.create();

          getArticleDefer.resolve(newArticle);

          // wait for resolve promises.
          $rootScope.$apply();

          // since we have spyon the "getArticleById" - check that "getArticleById" has benn called.
          expect(articleServiceMock.create).toHaveBeenCalled();

          // // check that when "loadArticles" finishes - we have the correct valuen in the controller.
          // expect(ArticleDetailController.article.id).toBe(newArticleId);
          // expect(ArticleDetailController.article.user.user_id).toBe(newArticle.user.user_id);
        });
  });



  // it("HTML", function() {
  //   var divElement = directiveElem.find('div');
  //   expect(divElement).toBeDefined();
  // })

  // describe('Testing directive html', function(){
  //   var compile, scope, directiveElem;
  //   var userServiceMock;
  //   var $httpBackend, authRequestHandler;
  //
  //   beforeEach(module('app'));
  //
  //   // mock
  //   beforeEach(function() {
  //
  //      userServiceMock = {
  //          getCurrentUser: function() {
  //            getCurrentUserHz = $q.defer();
  //            return getCurrentUserHz.promise;
  //         }
  //     };
  //   });
  //
  //   beforeEach(function(){
  //
  //       inject(function($compile, $rootScope, $templateCache, userService, articleService, $routeParams, $location, $injector, $controller){
  //         // Set up the mock http service responses
  //         $httpBackend = $injector.get('$httpBackend');
  //         // backend definition common for all tests
  //         authRequestHandler = $httpBackend.when('GET', './api/users/current')
  //               .respond({userId: 'userX'}, {'A-Token': 'xxx'});
  //
  //           compile = $compile;
  //           scope = $rootScope.$new();
  //
  //           var element = angular.element("<create-update-article-form></create-update-article-form>");
  //           template = $compile(element)(scope);
  //           scope.$digest();
  //           //controller = element.controller;
  //           controller = $controller('createUpdateArticleForm', {
  //             $scope: scope,
  //             userService: userServiceMock,
  //             $routeParams: $routeParams
  //           });;
  //       });
  //   });
  //
  //   it('should have root div element', function () {
  //     //$httpBackend.expectGET('./api/users/current');
  //
  //       //   $httpBackend.flush();
  //
  //       var divElement = directiveElem.find('div');
  //       expect(divElement).toBeDefined();
  //       console.log(divElement.text());
  //       //expect(divElement.text()).toEqual('This span is appended from directive.');
  //   });
  //
  //   // it("should toogle open when toggle() is called", inject(function() {
  //   //      $scope.open = false;
  //   //      $scope.toggle();
  //   //      expect($scope.open).toBeTruthy();
  //   //      $scope.toggle();
  //   //      expect($scope.open).toBeFalsy();
  //   //  }));
  // });


});
