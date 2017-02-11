// Karma configuration
// Generated on Wed Feb 08 2017 09:42:04 GMT+0300 (Belarus Standard Time)

module.exports = {

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
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        // add webpack as preprocessor
        //'test/unit/*.js': ['webpack'],
        'test/unit/*.js': ['coverage']
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

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress', 'coverage'],
    reporters: ['spec', 'coverage'],

    coverageReporter: {
        type: 'html',
        dir: 'coverage'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

}

