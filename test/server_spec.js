'use strict';

var expect = require('chai').expect,
  Lab = require('lab'),
  server = require('../server').server;

var lab = exports.lab = Lab.script();

/**
* Set up BDD like function calls...
*/
var describe = lab.describe,
  it = lab.it,
  before = lab.before,
  beforeEach = lab.beforeEach,
  after = lab.after,
  afterEach = lab.afterEach;

/**
* Tests...
*/
describe('Server', function() {
  it('should not start if setup error occurs', function (done) {

  });
});
