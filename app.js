const express = require('express');
const application = express();

// use middleware
application.use(express.json());

// setup routes
application.use('/integration-specs', require('./routes/integrationSpecs'));
application.use('/account-info', require('./routes/account'));

module.exports = application;