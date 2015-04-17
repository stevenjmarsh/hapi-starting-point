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
        }     
    ]);
    
    next();
};

exports.register.attributes = {
    name: 'baseRoutes'
};