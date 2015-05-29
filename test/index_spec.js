'use strict';

var expect = require('chai').expect,
  Lab = require('lab'),
  server = require('../server'),
  config = require('../config/settings');

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
describe('Server base routes, main pages', function () {

  describe('Default Layout and Partials', function() {

    it('root returns template using default layout with title successfully', function (done) {
      var options = {
        method: 'GET',
        url: '/'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(200);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain('<title>' + config.appTitle + '</title>');
        done();
      });
    });

    it('footer contains title', function (done) {
      var options = {
        method: 'GET',
        url: '/'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(200);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain("<div class='footer band footer-format'>");
        expect(siResponse.payload).to.contain('<p>' + config.appTitle + ' &copy; 2015.</p>');
        done();
      });

    });

    it('displays the nav bar partial successfully', function(done) {
      var options = {
        method: 'GET',
        url: '/about'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(200);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to
          .contain('<nav class="navbar navbar-inverse navbar-fixed-top">');
        done();
      });
    });

  });

  describe('Missing pages, bad routes', function() {

    it('a top level (first segment) bad route returns a 404 status and custom 404 page', function (done) {
      var options = {
        method: 'GET',
        url: '/wrongpage'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(404);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain('<h1><span class="error-404">404</span></h1>');
        done();
      });
    });

    it('a lower level (second segment) bad route returns a 404 status and custom 404 page', function (done) {
      var options = {
        method: 'GET',
        url: '/about/otherwrongpage'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(404);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain('<h1><span class="error-404">404</span></h1>');
        done();
      });
    });

  });

  describe('Home page', function() {

    it('returns page specific content and success status', function (done) {
      var options = {
        method: 'GET',
        url: '/'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(200);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain('<h2>A Main Section</h2>');
        done();
      });
    });

  });

  describe('About page', function() {

    it('returns page specific content and success status', function (done) {
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
