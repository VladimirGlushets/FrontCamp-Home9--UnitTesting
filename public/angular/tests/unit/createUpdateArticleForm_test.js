describe('Testing createUpdateArticleForm directive', function(){
    var compile, scope, directiveElem;

    beforeEach(function(){
        module('app');

        inject(function($compile, $rootScope, $templateCache, userService, articleService, $routeParams, $location){
            compile = $compile;
            scope = $rootScope.$new();

            //$templateCache.put('../Shared/PartialViews/createUpdateArticleForm.html', '<div></div>');
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var element = angular.element('<create-update-article-form></create-update-article-form>');
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    it('should have root div element', function () {
        var divElement = directiveElem.find('div');
        expect(divElement).toBeDefined();
        //expect(divElement.text()).toEqual('This span is appended from directive.');
    });

    it('should have root div element with content-container class', function () {
        var divElement = directiveElem.find('div');
        expect(divElement).toBeDefined();
        expect(divElement.hasClass('content-container')).toEqual(true);
    });
});
