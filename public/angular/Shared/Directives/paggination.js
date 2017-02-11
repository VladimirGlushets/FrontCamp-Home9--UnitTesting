(function (app) {
    'use strict';

    app.directive('paggination', Paggination);

    Paggination.$inject = [];
    function Paggination() {
        return {
            restrict: 'EA',
            scope: {
                pages: '=',
                alignModel: '=',
                pageChanged: '&',
                steps: '=',
                currentPage: '=',
                maxSize: '='
            },
            controller: PagginationController,
            controllerAs: 'vm',
            template: [
              '<ul class="pagination-sm pagination ng-isolate-scope ng-valid ng-not-empty" ng-model="alignModel" total-items="pages" ' +
              'max-size="10" boundary-links="true" ' +
              'ng-change="loadArticles()" boundary-link-numbers="true" rotate="false" ng-show="pages">',
                '<li ng-class="{disabled: vm.noPrevious()||ngDisabled}" class="pagination-first ng-scope disabled">' +
                    '<a href="" ng-click="vm.gotoFirst()" class="ng-binding">First</a></li>',
                '<li ng-class="{disabled: vm.noPrevious()||ngDisabled}" class="pagination-prev ng-scope disabled">' +
                    '<a href="" ng-click="vm.gotoPrev()" class="ng-binding">Previous</a></li>',

                '<li ng-repeat="i in vm.stepInfo" ng-class="{active: (vm.page[vm.index + i] == currentPage)}"' +
                    'class="pagination-page ng-scope" ng-show="vm.page[vm.index + i]">' +
                        '<a href="" ng-click="vm.goto(vm.index + i)" class="ng-binding">' +
                            '{{ vm.page[vm.index + i] }}</a></li>',

                '<li ng-class="{disabled: vm.noNext()||ngDisabled}" class="pagination-next ng-scope">' +
                    '<a href="" ng-click="vm.gotoNext()" class="ng-binding">Next</a></li>',
                '<li ng-class="{disabled: vm.noNext()||ngDisabled}" class="pagination-last ng-scope">' +
                '   <a href="" ng-click="vm.gotoLast()" class="ng-binding">Last</a></li>',
              '</ul>'
            ].join('')
        };
    }

    PagginationController.$inject = ['$scope'];
    function PagginationController($scope) {
        var vm = this;
        vm.index = 0;

        vm.steps = $scope.steps;

        vm.noNext = function(){
            return $scope.currentPage == vm.stepInfo.length;
        };

        vm.noPrevious = function () {
            return $scope.currentPage == 1;
        };

        vm.goto = function (index) {
            $scope.currentPage = vm.page[index];
        };

        vm.gotoPrev = function () {
            var prevItem = $scope.currentPage - 1;

            if(prevItem > 0)
            {
                $scope.currentPage = prevItem;
            }
        };

        vm.gotoNext = function () {
            var nextItem = $scope.currentPage + 1;

            if(vm.stepInfo.length >= nextItem)
            {
                $scope.currentPage = nextItem;
            }
        };

        vm.gotoFirst = function () {
            vm.index = 0;
            $scope.currentPage = 1;
        };

        vm.gotoLast = function () {
            $scope.currentPage = vm.stepInfo.length;
        };

        $scope.$watch('currentPage', function (value) {
            vm.currentPage = 1;
            vm.index = parseInt((value - 1) / vm.steps) * vm.steps;
            $scope.pageChanged();
        });

        $scope.$watch('pages', function () {
            vm.init();
        });

        vm.init = function () {
            vm.stepInfo = (function () {
                var result = [];

                var items = Math.ceil($scope.pages / $scope.maxSize);

                for (var i = 0; i < items; i++) {
                    result.push(i)
                }
                return result;
            })();

            vm.page = (function () {
                var result = [];

                var items = Math.ceil($scope.pages / $scope.maxSize);

                for (var i = 1; i <= items; i++) {
                    result.push(i);
                }
                return result;
            })();

        };
    };

})(angular.module('app.shared'));
