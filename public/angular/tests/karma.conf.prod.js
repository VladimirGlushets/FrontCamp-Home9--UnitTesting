let configObject = require('./karma.conf.js');

module.exports = function (config) {

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    configObject.logLevel = config.LOG_INFO;

    // enable / disable watching file and executing tests whenever any file changes
    configObject.autoWatch = false;

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    configObject.singleRun = true;

    config.set(configObject);
}