'use strict';

var apiControllers = require('../controllers/api'),
  apiValidators = require('../validators/api');

module.exports = [{
  method: 'GET',
  path: '/api/contacts',
  handler: apiControllers.contacts
}, {
  method: 'GET',
  path: '/api/contacts/{id}',
  handler: apiControllers.contact
}, {
  method: 'POST',
  path: '/api/contacts',
  handler: apiControllers.contactCreate,
  config: { validate: { payload: apiValidators } }
}, {
  method: 'PUT',
  path: '/api/contacts/{id}',
  handler: apiControllers.contactUpdate,
  config: { validate: { payload: apiValidators } }
}, {
  method: 'DELETE',
  path: '/api/contacts/{id}',
  handler: apiControllers.contactDelete
}];
