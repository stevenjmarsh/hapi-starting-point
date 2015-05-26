'use strict';

var path = require('path');

// Defaults that you access when you require this config.
module.exports = {
  rootPath: path.normalize(__dirname + '/..'),

  // If we specify a PORT env var use it, else use 3000
  port: parseInt(process.env.PORT, 10) || 3000,

  // If we specify a NODE_ENV env var use it, else use 'development'
  //    (note a use of environment is in Knexfile.js)
  environment: process.env.NODE_ENV || 'development'

  // We could use these settings for Hapi server settings as well
};
