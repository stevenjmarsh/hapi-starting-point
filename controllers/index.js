'use strict';

module.exports = {
  index: function (request, reply) {
      reply.view('index');
  },

  about: function (request, reply) {
      reply.view('about');
  },

  contact: function (request, reply) {
    reply.view('contact');
  },

  error404: function (request, reply) {
    reply.view('404').code(404);
  }
};

