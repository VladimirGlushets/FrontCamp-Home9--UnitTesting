let configObject = require('./karma.conf.js');

module.exports = function(config) {

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    configObject.logLevel = config.LOG_INFO;

    config.set(configObject);
}
