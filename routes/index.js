'use strict';

var indexControllers = require('../controllers/index');

// Base routes for default index/root path, 404 error page, and others...
module.exports = [{
  method: 'GET',
  path: '/',
  handler: indexControllers.index,
  config: { id: 'index', plugins: { lout: false } }
}, {
  method: 'GET',
  path: '/list',
  handler: indexControllers.list,
  config: { id: 'list', plugins: { lout: false } }
}, {
  method: 'GET',
  path: '/about',
  handler: indexControllers.about,
  config: { id: 'about', plugins: { lout: false } }
}, {
  method: 'GET',
  path: '/contact',
  handler: indexControllers.contact,
  config: { id: 'contact', plugins: { lout: false } }
}, {
  method: 'GET',
  path: '/{glob*}',
  handler: indexControllers.error404,
  config: { id: 'error404', plugins: { lout: false } }
}];
