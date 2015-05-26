'use strict';

var knexConfig = require('../knexfile');
var settings = require('./settings');

// following the tutorial here, but this is susceptible to error
//   -no fallback / default if an incorrect environment is provided
var knex = require('knex')(knexConfig[settings.environment]);

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
