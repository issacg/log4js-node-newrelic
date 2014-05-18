"use strict";
var log4js = require('log4js'),
    newrelic = require('newrelic');
    
    
function newRelicAppender() {
    return function(logEvent) {
        newrelic.noticeError(logEvent.data[0]);
    }
}

function configure(config) {
    return newRelicAppender();
}

module.exports = {
    name: "log4js-node-newrelic",
    configure: configure,
    appender: newRelicAppender
}