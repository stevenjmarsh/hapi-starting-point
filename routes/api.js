'use strict';

var  apiControllers = require('../controllers/api');

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
  handler: apiControllers.contactCreate
}, {
  method: 'PUT',
  path: '/api/contacts/{id}',
  handler: apiControllers.contactUpdate
}, {
  method: 'DELETE',
  path: '/api/contacts/{id}',
  handler: apiControllers.contactDelete
}];
