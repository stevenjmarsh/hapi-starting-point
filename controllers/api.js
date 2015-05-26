var models = require('../models/contacts'),
  utils = require('../utils/utils');

module.exports = {
  contacts: function (request, reply) {
    models.Contact.fetchAll().then(function (contacts) {
      reply(utils.formatJson('contacts', contacts));
    });
  },

  contact: function (request, reply) {
    new models.Contact({id: request.params.id}).fetch().then(function(contact) {
      reply(utils.formatJson('contact', contact));
    });
  },

  contactCreate: function (request, reply) {
    request.payload.contact.created_at = new Date();
    request.payload.contact.updated_at = new Date();
    new models.Contact(request.payload.contact).save().then(function (contact) {
      reply(utils.formatJson('contact', contact));
    });
  },

  contactUpdate: function (request, reply) {
    request.payload.contact.updated_at = new Date();
    new models.Contact(request.payload.contact).save().then(function (contact) {
      reply(utils.formatJson('contact', contact));
    });
  },

  contactDelete: function (request, reply) {
    new models.Contact(request.params).destroy().then(function (contact) {
      reply(JSON.stringify(contact));
    });
  }
};
