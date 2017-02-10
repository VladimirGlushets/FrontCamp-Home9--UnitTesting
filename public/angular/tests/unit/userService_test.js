describe('UserService', function () {
    var mockUserService,
        userService,
        ApiRoutes,
        $httpBackend;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function(_userService_, _$q_, _$httpBackend_, _ApiRoutes_) {
        userService = _userService_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
        ApiRoutes = _ApiRoutes_;

        // Spy on our service call but allow it to continue to its implementation
        spyOn(userService, "getCurrentUser").and.callThrough();
        spyOn(userService, "login").and.callThrough();
        spyOn(userService, "logout").and.callThrough();
      }));

      it('Check defined getCurrentUser', function() {
          expect(userService.getCurrentUser).toBeDefined();
      });

      it('Check defined login', function() {
          expect(userService.login).toBeDefined();
      });

      it('Check defined logout', function() {
          expect(userService.logout).toBeDefined();
      });

      it('Check getCurrentUser function', function() {
          var responce = {
              success: true
          };

          var resultData;

          // Declare the endpoint we expect our service to hit and provide it with our mocked return values
          $httpBackend
            .whenGET(ApiRoutes.GetCurrentUser)
            .respond(function (method, url, data) {
            return [200, responce, {}];
          });

          expect(userService.getCurrentUser).not.toHaveBeenCalled();

          userService.getCurrentUser()
          .then(result => {
               resultData = result;
          });

          // Flush pending HTTP requests
          $httpBackend.flush();

          expect(userService.getCurrentUser).toHaveBeenCalled();
          expect(resultData.success).toBeDefined();
          expect(resultData.success).toEqual(true);

        });

        it('Check getCurrentUser function', function() {
            var responce = {
                success: true
            };

            var user = {
              id: 1,
              name: "test"
            };

            var resultData;

            // Declare the endpoint we expect our service to hit and provide it with our mocked return values
            $httpBackend
              .whenGET(ApiRoutes.GetCurrentUser)
              .respond(function (method, url, data) {
              return [200, responce, user];
            });

            expect(userService.getCurrentUser).not.toHaveBeenCalled();

            userService.getCurrentUser()
            .then(result => {
                 resultData = result;
            });

            // Flush pending HTTP requests
            $httpBackend.flush();

            expect(userService.getCurrentUser).toHaveBeenCalled();
            expect(resultData.success).toBeDefined();
            expect(resultData.success).toEqual(true);

          });

      it('Check logout function', function() {
          var responce = {
            success: true
          };

          var resultData;

          // Declare the endpoint we expect our service to hit and provide it with our mocked return values
          $httpBackend
            .whenGET(ApiRoutes.Logout)
            .respond(function (method, url, data) {
            return [200, responce, {}];
          });

          expect(userService.logout).not.toHaveBeenCalled();

          userService.logout()
            .then(result => {
                 resultData = result;
              });

              // Flush pending HTTP requests
          $httpBackend.flush();

          expect(userService.logout).toHaveBeenCalled();
          expect(resultData.success).toBeDefined();
          expect(resultData.success).toEqual(true);

        });

      it('Check login function', function() {
            var responce = {
              success: true
            };

            var resultData;

            // Declare the endpoint we expect our service to hit and provide it with our mocked return values
            $httpBackend
                .whenPOST(ApiRoutes.Login)
                .respond(function (method, url, data, headers) {
                  return [200, responce, {}];
                });

            expect(userService.login).not.toHaveBeenCalled();

            userService.login({})
              .then(result => {
                   resultData = result;
                });

                // Flush pending HTTP requests
            $httpBackend.flush();

            expect(userService.login).toHaveBeenCalled();
            expect(resultData.success).toBeDefined();
            expect(resultData.success).toEqual(true);

          });
});
