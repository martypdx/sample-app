const app = require('express')();
const morgan = require('morgan')('dev');
const errorHandler = require('./error-handler')();
const actors = require('./routes/actors');
const awards = require('./routes/awards');
const auth = require('./routes/auth');
const ensureAuth = require('./auth/ensure-auth')();

app.use(morgan);

app.use('/auth', auth);
app.use('/actors', ensureAuth, actors);
app.use('/awards', ensureAuth, awards);

app.use(errorHandler);

module.exports = app;