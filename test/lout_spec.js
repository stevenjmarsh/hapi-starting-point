'use strict';

var expect = require('chai').expect,
  Lab = require('lab'),
  server = require('../server');

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
describe('API documentation (lout plugin)', function() {

  it('shows route for an api endpoint', function (done) {
    var options = {
      method: 'GET',
      url: '/docs'
    };

    server.inject(options, function(siResponse) {
      expect(siResponse.statusCode).to.equal(200);
      expect(siResponse.headers['content-type']).to.equal('text/html');
      expect(siResponse.payload).to.contain('/api/contacts/{id}');
      done();
    });
  });

  it('does not show route for web page (about)', function (done) {
    var options = {
      method: 'GET',
      url: '/docs'
    };

    server.inject(options, function(siResponse) {
      expect(siResponse.statusCode).to.equal(200);
      expect(siResponse.headers['content-type']).to.equal('text/html');
      expect(siResponse.payload).to.not.contain('/about');
      done();
    });
  });

  it('does not show route for public assets', function (done) {
    var options = {
      method: 'GET',
      url: '/docs'
    };

    server.inject(options, function(siResponse) {
      expect(siResponse.statusCode).to.equal(200);
      expect(siResponse.headers['content-type']).to.equal('text/html');
      expect(siResponse.payload).to.not.contain('/favicon');
      done();
    });
  });

});
