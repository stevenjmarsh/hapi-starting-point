'use strict';

// Base routes for default index/root path, 404 error page, and others...
exports.register = function (server, options, next) {

  server.route([
    {
      method: 'GET',
      path: '/',
      config: {
        handler: function (request, reply) {
          reply.view('index');
        },
        id: 'index'
      }
    },
    {
      method: 'GET',
      path: '/{glob*}',
      config: {
        handler: function (request, reply) {
          reply.view('404', { title: 'Page Not Found - 404'}).code(404);
        },
        id: '404'
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'baseRoutes'
};
