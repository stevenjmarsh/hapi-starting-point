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
describe('Asset Pipeline (public - serves css, js, images)', function() {

  it('successfully gets our locally served main.css', function (done) {
    var options = {
      method: 'GET',
      url: '/public/css/main.css'
    };

    server.inject(options, function(siResponse) {
      expect(siResponse.statusCode).to.satisfy(function (num) {
        return num === 200 || num === 304;
      });
      done();
    });
  });

  it('successfully gets logo image', function(done) {
    var options = {
      method: 'GET',
      url: '/public/images/mountain_logo.png'
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

  it('successfully gets our locally served hbp_navbar.js', function (done) {
    var options = {
      method: 'GET',
      url: '/public/js/hbp_navbar.js'
    };

    server.inject(options, function(siResponse) {
      expect(siResponse.statusCode).to.satisfy(function (num) {
        return num === 200 || num === 304;
      });
      done();
    });
  });

});
