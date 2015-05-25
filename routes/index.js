'use strict';

// Base routes for default index/root path, 404 error page, and others...
module.exports = [{
  method: 'GET',
  path: '/',
  config: {
    handler: function (request, reply) {
      reply.view('index');
    },
    id: 'index'
  }
}, {
  method: 'GET',
  path: '/about',
  config: {
    handler: function (request, reply) {
      reply.view('about');
    },
    id: 'about'
  }
}, {
  method: 'GET',
  path: '/contact',
  config: {
    handler: function (request, reply) {
      reply.view('contact');
    },
    id: 'contact'
  }
}, {
  method: 'GET',
  path: '/{glob*}',
  config: {
    handler: function (request, reply) {
      reply.view('404').code(404);
    },
    id: '404'
  }
}];
