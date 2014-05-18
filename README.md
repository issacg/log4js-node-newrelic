# log4js-node-newrelic
## log4js NewRelic Reporter

### Summary

```javascript
require('newrelic');
var log4js = require('log4js');

log4js.configure({
    appenders: [
    { type: 'console' },
    { type: 'logLevelFilter', level: "ERROR", appender: {type: 'log4js-node-newrelic'}}
  ]
})

var logger = log4js.getDefaultLogger();
logger.debug("Debug won't be logged");
logger.info("Nor will this");
logger.error("Error String");
logger.error(new Error("Error Obj with a backtrace"));
```

This will report all events from the appender as Errors (regardless of the loglevel!)
to your NewRelic application.