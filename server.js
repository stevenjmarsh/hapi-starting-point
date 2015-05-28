'use strict';

// Dependencies...
var Hapi = require('hapi'),
  config = require('./config/settings'),
  assetRoutes = require('./routes/assets.js'),
  apiRoutes = require('./routes/api.js'),
  indexRoutes = require('./routes/index.js');

// Create server, and set initial configuration settings
var server = new Hapi.Server();

server.connection({ port: config.port });

// Set view engine and folder
server.views({
  engines: { html: require('handlebars') },
  path: './views',
  layoutPath: './views/layout',
  layout: 'default',
  partialsPath: './views/partials'
});

// Load all plugins (community/npm plugins first, then project specific)
server.register([
  {
    // Logger
    register: require('good'),
    options: {
      reporters: [{
        reporter: require('good-console'),
        events: { log: '*', request: '*', response: '*', error: '*' }
      }]
    }
  },
  { register: require('lout') },
  { register: require('hapi-named-routes') }
], function (err) {
  if (err) {
    console.log('Failed loading plugin:', err);
  }
});

server.route(assetRoutes);
server.route(apiRoutes);
server.route(indexRoutes);

module.exports = server;
