const cookieParser = require('cookie-parser');
const session = require('express-session');
const parser = require('body-parser');
const express = require('express');
const path = require('path');

// helmet cors csurf morgan compression

const port = process.env.PORT || 8000;
const app = express();

const sessionConfig = {
  saveUninitialized: true,
  secret: 'sessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000,
  },
};

require('./server/config/database');

app
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(express.static(path.join(__dirname, 'dist')))
  .use(cookieParser('lasirfhalsifhklasfhlaskf'))
  .use(session(sessionConfig))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.route'));

app.listen(port, () => console.log(`express server listening on port ${port}`));
