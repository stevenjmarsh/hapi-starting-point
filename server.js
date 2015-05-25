'use strict';

// Dependencies...
var Hapi = require('hapi');

// Create server, and set initial configuration settings
var server = new Hapi.Server();

server.connection({
  port: 3000
});

// Set view engine and folder
server.views({
  engines: {
      html: require('handlebars')
  },
  path: './views',
  layoutPath: './views/layout',
  layout: 'default',
  partialsPath: './views/partials'
});

// Load all plugins (community/npm plugins first, then project specific)
server.register([
  {
    register: require('good'),
    options: {
      reporters: [{
        reporter: require('good-console'),
        events: { log: '*', request: '*', response: '*', error: '*' }
      }]
    }
  },
  {
    register: require('hapi-named-routes')
  },
  {
    register: require('./assets/index')
  },
  {
    register: require('./controllers/index')
  }
], function (err) {
  if (err) {
    console.log('Failed loading plugin:', err);
  }
});

module.exports = server;
