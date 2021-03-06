'use strict';

var models = require('../models/contacts'),
  utils = require('../utils/utils');

module.exports = {
  index: function (request, reply) {
    reply.view('index');
  },

  list: function (request, reply) {
    models.Contact.fetchAll().then(function (contacts) {
      reply.view('list', { contacts: contacts.toJSON() });
    });
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

