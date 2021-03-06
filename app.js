const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const apiRouter = require('./routes/api');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client/react-google-maps/build')));

app.use('/api', apiRouter);

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/react-google-maps/build', 'index.html'));
});

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
