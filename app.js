const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.json({ error: 'Not found' });
});

// error handler
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({ error: true });
});

module.exports = app;