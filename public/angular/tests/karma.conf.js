// Karma configuration
// Generated on Wed Feb 08 2017 09:42:04 GMT+0300 (Belarus Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../vendor/jquery/jquery-1.11.1.js',
      '../vendor/jquery/jquery-ui.js',
      '../vendor/bootstrap.js',

      '../vendor/angular/angular.js',
      '../vendor/angular/angular-mocks.js',
      '../vendor/angular/angular-route.js',
      '../vendor/angular/angular-animate.js',
      '../vendor/angular/angular-sanitize.js',
      '../vendor/angular/angular-bootstrap-multiselect.js',
      '../vendor/ui-bootstrap/ui-bootstrap-tpls-1.3.3.min.js',

      '../Shared/app.shared.js',
      '../Shared/Directives/amountOfArticles.js',
      '../Shared/Directives/createUpdateArticleForm.js',
      '../Shared/Directives/paggination.js',

      '../Shared/Services/userService.js',
      '../Shared/Services/articleService.js',
      '../Shared/Constants/apiRoutes.js',

      '../Shared/PartialViews/*.html',

      '../app.js',
      'unit/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    preprocessors: {
        // add webpack as preprocessor
      '../Shared/PartialViews/*.html': ['ng-html2js'],
      'test/unit/*.js': ['webpack']
      },

      webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies

            // webpack configuration
          },

          webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
          },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      // stripPrefix: 'public/',
      // stripSuffix: '.ext',
      // // prepend this to the
      // prependPrefix: 'served/',

      // - setting this option will create only a single module that contains templates
      //   from all the files, so you can load them all with module('foo')
      // - you may provide a function(htmlPath, originalPath) instead of a string
      //   if you'd like to generate modules dynamically
      //   htmlPath is a originalPath stripped and/or prepended
      //   with all provided suffixes and prefixes
      moduleName: 'app'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
