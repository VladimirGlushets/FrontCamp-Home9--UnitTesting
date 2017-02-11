describe('Paggination directive', function() {

    var $compile,
        $scope,
        directiveElem,
        directiveController,
        directiveScope;

    // Before each test load bloglog module
    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();

        directiveElem = getCompiledElement();
    }));

    function getCompiledElement() {
        var element = angular.element('<paggination flex pages="100" current-page=2 steps="5" max-size="10" align-model="" cl-align="center center"></paggination>');
        var compiledElement = $compile(element)($scope);
        directiveScope = compiledElement.isolateScope() || compiledElement.scope();
        $scope.$digest();
        directiveController = compiledElement.controller("paggination");
        return compiledElement;
    }

    it('Paging directive should be defined', function() {
        expect(directiveElem).toBeDefined();
    });

    it('check goto index', function() {
        var pageValue = 5;
        directiveScope.vm.goto(pageValue);
        expect(directiveScope.currentPage - 1).toBe(pageValue);
    });

    it('check go to previous page', function () {
        var prevPage = directiveScope.currentPage - 1;
        directiveController.gotoPrev();
        expect(directiveScope.currentPage).toBe(prevPage);
    });

    it('check go to next page', function () {
        var nextPage = directiveScope.currentPage + 1;
        directiveController.gotoNext();
        expect(directiveScope.currentPage).toBe(nextPage);
    });

    it('check go to first page', function () {
        directiveController.gotoFirst();
        expect(directiveScope.currentPage).toBe(1);
    });

    it('check swith to last page', function () {
        directiveController.gotoLast();
        expect(directiveScope.currentPage).toBe(directiveController.page.length);
    });
});