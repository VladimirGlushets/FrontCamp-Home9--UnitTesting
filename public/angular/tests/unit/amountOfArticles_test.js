describe('Testing amountOfArticles component', function(){
    beforeEach(module('app'));

    var element;
    var scope;
    beforeEach(inject(function(_$rootScope_, _$compile_){
        $rootScope = _$rootScope_;
        $compile = _$compile_;

        scope = $rootScope.$new();

        element = angular.element('<amount-of-articles filter-data-length="7" total="10"></amount-of-articles>');
        element = $compile(element)(scope);
        // scope.filterDataLength = '7';
        // scope.total = '10';
        scope.$apply();

    }));

    it('should render the text', function() {
        var div = element.find('div');
        expect(div.text()).toBe('7 of 10');
    });
});
