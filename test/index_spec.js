'use strict';

var expect = require('chai').expect,
  Lab = require('lab'),
  server = require('../server/server');

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
describe('Server base routes', function () {

  describe('Root / Home', function() {
    it('root returns template using default layout with title successfully', function (done) {
      var options = {
        method: 'GET',
        url: '/'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(200);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain('<title>Hapi-Handlebars</title>');
        done();
      });
    });

    it('root returns index content with header successfully', function (done) {
      var options = {
        method: 'GET',
        url: '/'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(200);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain('<h1>Hello World!</h1>');
        done();
      });
    });

    it('return a 404 status and custom 404 page if route not found', function (done) {
      var options = {
        method: 'GET',
        url: '/somewrongpage'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(404);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain('Page Not Found - 404');
        expect(siResponse.payload).to.contain('<p>Missing page or incorrect route.</p>');
        done();
      });
    });
  });

  describe('About', function() {
    it('returns the about page with content and success status', function (done) {
      var options = {
        method: 'GET',
        url: '/about'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(200);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain('<h1>About</h1>');
        done();
      });
    });
  });

});
