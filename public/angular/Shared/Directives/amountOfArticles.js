(function (app) {

    app.component('amountOfArticles', {
        bindings: {
            filterDataLength: '=',
            total: '='
        },
        //controllerAs: 'vm',
        controller: function () {
            this.$onInit = function () {

            }
        },

        template: '<div>{{ $ctrl.filterDataLength }} of {{ $ctrl.total }}</div>'
    });

})(angular.module('app.shared'));