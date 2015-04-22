'use strict';

// Routing and file serving for public assets
exports.register = function (server, options, next) {
  server.route([
    {
      method: 'GET',
      path: '/images/{glob*}',
      config: {
        handler: {
          directory: { path: './public/images' }
        },
        id: 'images'
      }
    },
    {
      method: 'GET',
      path: '/css/{glob*}',
      config: {
        handler: {
          directory: { path: './public/css' }
        },
        id: 'css'
      }
    },
    {
      method: 'GET',
      path: '/favicon.ico',
      config: {
        handler: {
          file: './public/images/favicon.png'
        },
        id: 'favicon'
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'assets'
};
