(function (app) {
    'use strict';

    app.service('articleService', articleService);

    articleService.$inject = ['$http', 'ApiRoutes'];

    function articleService($http, apiRoutes) {
        var self = this;

        self.getArticles = getArticles;

        function getArticles(){
          return $http.get(apiRoutes.GetAllArticles).then(extractData);
        }

        function extractData(res) {
            return res.data;
        }
    };
})(angular.module('app.shared'));
