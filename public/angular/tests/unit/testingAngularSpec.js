describe('Testing Angular JS', function(){
  describe('Testing AngularJS Controller', function(){

    it('should initialize the title in the scope', function(){
      module('app');

      var scope = {};
      var ctrl;

      inject(function($controller){
        ctrl = $controller('angularTestController', {$scope:scope});
      });

      expect(scope.title).toBeDefined();
      expect(scope.title).toBe('test title');
    });

  });
});
