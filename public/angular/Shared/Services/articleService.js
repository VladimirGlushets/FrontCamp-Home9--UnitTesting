(function (app) {
    'use strict';

    app.service('articleService', articleService);

    articleService.$inject = ['$http', 'ApiRoutes'];

    function articleService($http, apiRoutes) {
        var self = this;

        self.getArticles = getArticles;
        self.getAllArticles = getAllArticles;
        self.getDetails = getDetails;
        self.create = create;
        self.update = update;
        self.deleteArticle = deleteArticle;
        self.getArticlesTotal = getArticlesTotal;

        function deleteArticle(articleId){

          return $http({
              method: 'DELETE',
              url: apiRoutes.ArticleDelete,
              data: {
                  articleId: articleId
              },
              headers: {
                  'Content-type': 'application/json;charset=utf-8'
              }
          }).then(extractData);
        }

        function getAllArticles(){
          return $http.get(apiRoutes.GetAllArticles).then(extractData);
        }

        function getArticles(filterObj){
            var path;

            if(filterObj){
                path = apiRoutes.GetAllArticles + '/' + filterObj.Page + '/' + filterObj.ItemsPerPage;
            }
            else{
                path = apiRoutes.GetAllArticles;
            }

            return $http.get(path).then(extractData);
        }

        function getArticlesTotal(){
            return $http.get(apiRoutes.ArticleTotal).then(extractData);
        }

        function getDetails(id){
          return $http.get(apiRoutes.ArticleDetails + id).then(extractData);
        }

        function create(model){
          return $http.post(apiRoutes.ArticleCreate, model).then(extractData);
        }

        function update(model){
          return $http.put(apiRoutes.ArticleUpdate, model).then(extractData);
        }

        function extractData(res) {
            return res.data;
        }
    };
})(angular.module('app.shared'));
