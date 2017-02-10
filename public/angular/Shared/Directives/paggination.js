(function (app) {
    'use strict';

    app.directive('paggination', PagingDirective);

    PagingDirective.$inject = [];
    function PagingDirective() {
        return {
            restrict: 'EA',
            scope: {
                pages: '=',
                alignModel: '=',
                pageChanged: '&',
                steps: '=',
                currentPage: '='
            },
            controller: PagingController,
            controllerAs: 'vm',
            template: [
                '<md-button class="md-icon-button md-raised md-warn" aria-label="First" ng-click="vm.gotoFirst()">{{ vm.first }}</md-button>',
                '<md-button class="md-icon-button md-raised" aria-label="Previous" ng-click="vm.gotoPrev()" ng-show="vm.index - 1 >= 0">&#8230;</md-button>',
                '<md-button class="pagination-page ng-scope active" aria-label="Go to page {{i+1}}" ng-repeat="i in vm.stepInfo"',
                ' ng-click="vm.goto(vm.index + i)" ng-show="vm.page[vm.index + i]" ',
                ' ng-class="{\'md-primary\': vm.page[vm.index + i] == currentPage}">',
                ' {{ vm.page[vm.index + i] }}',
                '</md-button>',
                '<md-button class="md-icon-button md-raised" aria-label="Next" ng-click="vm.gotoNext()" ng-show="vm.index + vm.steps < pages">&#8230;</md-button>',
                '<md-button class="md-icon-button md-raised md-warn" aria-label="Last" ng-click="vm.gotoLast()">{{ vm.last }}</md-button>',

              //   '<ul class="pagination-sm pagination ng-isolate-scope ng-valid ng-not-empty" ng-model="filterObj.Page" total-items="filterData.length" max-size="10" boundary-links="true" ng-change="loadArticles()" boundary-link-numbers="true" rotate="false" ng-show="(filterData.length > filterObj.ItemsPerPage)">',
              //   '<li ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first ng-scope disabled"><a href="" ng-click="selectPage(1, $event)" class="ng-binding">First</a></li>',
              //   '<li ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev ng-scope disabled"><a href="" ng-click="selectPage(page - 1, $event)" class="ng-binding">Previous</a></li>',
              //   '<li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&amp;&amp;!page.active}" class="pagination-page ng-scope active"><a href="" ng-click="selectPage(page.number, $event)" class="ng-binding">1</a></li>',
              //   '<li ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next ng-scope"><a href="" ng-click="selectPage(page + 1, $event)" class="ng-binding">Next</a></li>',
              //   '<li ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last ng-scope"><a href="" ng-click="selectPage(totalPages, $event)" class="ng-binding">Last</a></li>',
              // '</ul>'
            ].join('')
        };
    }

    PagingController.$inject = ['$scope'];
    function PagingController($scope) {
        var vm = this;

        vm.first = '<<';
        vm.last = '>>';

        vm.index = 0;

        vm.steps = $scope.steps;

        vm.goto = function (index) {
            $scope.currentPage = vm.page[index];
        };

        vm.gotoPrev = function () {
            $scope.currentPage = vm.index;
            vm.index -= vm.steps;
        };

        vm.gotoNext = function () {
            vm.index += vm.steps;
            $scope.currentPage = vm.index + 1;
        };

        vm.gotoFirst = function () {
            vm.index = 0;
            $scope.currentPage = 1;
        };

        vm.gotoLast = function () {
            vm.index = parseInt($scope.pages / vm.steps) * vm.steps;
            vm.index === $scope.pages ? vm.index = vm.index - vm.steps : '';
            $scope.currentPage = $scope.pages;
        };

        $scope.$watch('currentPage', function (value) {
            vm.index = parseInt((value - 1) / vm.steps) * vm.steps;
            $scope.pageChanged();
        });

        $scope.$watch('pages', function () {
            vm.init();
        });

        vm.init = function () {
            vm.stepInfo = (function () {
                var result = [];
                for (var i = 0; i < vm.steps; i++) {
                    result.push(i)
                }
                return result;
            })();

            vm.page = (function () {
                var result = [];
                for (var i = 1; i <= $scope.pages; i++) {
                    result.push(i);
                }
                return result;
            })();

        };
    };

})(angular.module('app.shared'));
