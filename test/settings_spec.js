'use strict';

var expect = require('chai').expect,
  Lab = require('lab'),
  settings = require('../config/settings'),
  reload = require('require-reload')(require);

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
describe('Environment Settings', function() {

  var origPort, origNodeEnv;

  before(function (done) {
    origPort = process.env.PORT;
    origNodeEnv = process.env.NODE_ENV;

    done();
  });

  after(function (done) {
    if (origPort) {
      process.env.PORT = origPort;
    } else {
      delete process.env.PORT;
    }

    if (origNodeEnv) {
      process.env.NODE_ENV = origNodeEnv;
    } else {
      delete process.env.NODE_ENV;
    }
    settings = reload('../config/settings');

    done();
  });

  it('PORT defaults to 3000, when no PORT env set', function (done) {
    delete process.env.PORT;
    settings = reload('../config/settings');

    expect(settings.port).to.equal(3000);

    done();
  });

  it('PORT gets set to env PORT value', function (done) {
    process.env.PORT = 500;
    settings = reload('../config/settings');

    expect(settings.port).to.equal(500);

    done();
  });

  it('NODE_ENV defaults to "development", when no NODE_ENV set', function (done) {
    delete process.env.NODE_ENV;
    settings = reload('../config/settings');

    expect(settings.environment).to.equal('development');

    done();
  });

  it('NODE_ENV gets set to env NODE_ENV value', function (done) {
    delete process.env.NODE_ENV;
    settings = reload('../config/settings');

    expect(settings.environment).to.equal('development');

    done();
  });

});
