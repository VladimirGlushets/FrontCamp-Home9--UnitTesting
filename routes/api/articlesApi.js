var express = require('express');
var router = express.Router();
var ApiArticleController = require('../../controllers/api/apiArticleController');

/* GET /api/articles */
router.get('/', function(req, res, next) {
    var controller = new ApiArticleController(req, res, next);
    controller.getAllArticles();
});

router.get('/total', function(req, res, next) {
    var controller = new ApiArticleController(req, res, next);
    controller.getArticlesTotal();
});

router.get('/:page/:itemsPerPage', function(req, res, next) {
    var controller = new ApiArticleController(req, res, next);
    controller.getArticles(req.params['page'], req.params['itemsPerPage']);
});

/* GET /api/articles/:id. */
router.get('/:articleId', function(req, res, next) {
    var controller = new ApiArticleController(req, res, next);
    controller.details(req.params['articleId']);
})

router.post('/', function(req, res, next) {
    var controller = new ApiArticleController(req, res, next);
    controller.createArticleAction(req.body);
})

/* PUT /api/articles article update.
  {
    articleId: 'currentArticleId',
    title: 'Article Title',
    content: "Article Content"
  }
*/
router.put('/', function(req, res, next) {
    var controller = new ApiArticleController(req, res, next);
    controller.update(req.body);
})

/* DELETE /api/articles
  {
    articleId: 'currentArticleId'
  }
*/
router.delete('/', function(req, res, next) {
    var controller = new ApiArticleController(req, res, next);
    controller.delete(req.body['articleId']);
})

module.exports = router;
