var models = require('../models/contacts'),
  utils = require('../utils/utils'),
  Boom = require('boom');


module.exports = {
  contacts: function (request, reply) {
    models.Contact.fetchAll().then(function (contacts) {
      reply(utils.formatJson('contacts', contacts));
    });
  },

  contact: function (request, reply) {
    new models.Contact({id: request.params.id})
    .fetch({require: true})
    .then(function(contact) {
      reply(utils.formatJson('contact', contact));
    })
    .catch(function (err) {
      // most common error thrown in this case is not found
      // NOTE, add finer grained testing based on needs of application.
      reply(Boom.notFound("Contact not found."));
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
    new models.Contact(request.params)
    .destroy({require: true})
    .then(function (contact) {
      reply(JSON.stringify(contact));
    })
    .catch(function(err) {
      reply(Boom.notFound("Contact not found."));
    });
  }
};
