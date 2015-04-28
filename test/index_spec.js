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

  describe('Default Layout and Partials', function() {

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

    it('successfully gets our locally served main.css', function (done) {
      var options = {
        method: 'GET',
        url: '/css/main.css'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.satisfy(function (num) {
          return num === 200 || num === 304;
        });
        done();
      });
    });

    it('successfully gets our locally served main.js', function (done) {
      var options = {
        method: 'GET',
        url: '/js/main.js'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.satisfy(function (num) {
          return num === 200 || num === 304;
        });
        done();
      });
    });

    it('successfully gets asset images', function(done) {
      var options = {
        method: 'GET',
        url: '/images/projects.png'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.satisfy(function (num) {
          return num === 200 || num === 304;
        });
        done();
      });
    });

    it('successfully serves favicon.ico', function(done) {
      var options = {
        method: 'GET',
        url: '/favicon.ico'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.satisfy(function (num) {
          return num === 200 || num === 304;
        });
        done();
      });
    });
  });

  describe('Navbar', function() {

    it('displays the nav bar partial successfully', function(done) {
      var options = {
        method: 'GET',
        url: '/about'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(200);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to
          .contain('<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">');
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
        expect(siResponse.payload).to.contain('Page Not Found - 404');
        expect(siResponse.payload).to.contain('<p>Missing page or incorrect route.</p>');
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
        expect(siResponse.payload).to.contain('Page Not Found - 404');
        expect(siResponse.payload).to.contain('<p>Missing page or incorrect route.</p>');
        done();
      });
    });
  });

  describe('Home page (root)', function() {

    it('returns page specific content and success status', function (done) {
      var options = {
        method: 'GET',
        url: '/'
      };

      server.inject(options, function(siResponse) {
        expect(siResponse.statusCode).to.equal(200);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain('<h2>The Fastest Way to Space</h2>');
        done();
      });
    });

  });

  describe('About', function() {

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
