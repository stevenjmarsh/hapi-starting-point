'use strict';

// Routing and file serving for public assets
module.exports = [{
  method: 'GET',
  path: '/public/images/{glob*}',
  config: {
    handler: {
      directory: { path: './public/images' }
    },
    id: 'images'
  }
}, {
  method: 'GET',
  path: '/public/css/{glob*}',
  config: {
    handler: {
      directory: { path: './public/css' }
    },
    id: 'css'
  }
}, {
  method: 'GET',
  path: '/public/js/{glob*}',
  config: {
    handler: {
      directory: { path: './public/js' }
    },
    id: 'js'
  }
}, {
  method: 'GET',
  path: '/favicon.ico',
  config: {
    handler: {
      file: './public/images/mountain_favicon.ico'
    },
    cache: { expiresIn: 86400000, privacy: 'public' },
    id: 'favicon'
  }
}];
