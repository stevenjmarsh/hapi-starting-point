'use strict';

// Routing and file serving for public assets
module.exports = [{
  method: 'GET',
  path: '/public/images/{glob*}',
  handler: { directory: { path: './public/images' } },
  config: { id: 'images', plugins: { lout: false } }
}, {
  method: 'GET',
  path: '/public/css/{glob*}',
  handler: { directory: { path: './public/css' } },
  config: { id: 'css', plugins: { lout: false } }
}, {
  method: 'GET',
  path: '/public/js/{glob*}',
  handler: { directory: { path: './public/js' } },
  config: { id: 'js', plugins: { lout: false } }
}, {
  method: 'GET',
  path: '/favicon.ico',
  handler: { file: './public/images/mountain_favicon.ico' },
  config: {
    cache: { expiresIn: 86400000, privacy: 'public' },
    id: 'favicon',
    plugins: { lout: false }
  }
}];
