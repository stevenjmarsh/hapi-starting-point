'use strict';

// necessary to set NODE_ENV when using test database
process.env.NODE_ENV = 'test';

var expect = require('chai').expect,
  Lab = require('lab'),
  server = require('../server'),
  bookshelf = require('../config/bookshelf');

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
before(function (done) {
  bookshelf.knex.migrate.latest().then(function () {
    bookshelf.knex.seed.run().then(function () {
      done();
    });
  });
});

after(function (done) {
  bookshelf.knex('contacts').truncate().then(function () {
    done();
  });
});

describe('List (contacts) page', function () {

  describe('Show contacts from test database', function() {
    it('lists first test contact', function (done) {
      var options = {
        method: 'GET',
        url: '/list'
      };

      server.inject(options, function (siResponse) {
        expect(siResponse.statusCode).to.equal(200);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain('Joe');
        expect(siResponse.payload).to.contain('Smith');
        expect(siResponse.payload).to.contain('(555) 111-2222');
        done();
      });
    });

    it('lists last test contact', function (done) {
      var options = {
        method: 'GET',
        url: '/list'
      };

      server.inject(options, function (siResponse) {
        expect(siResponse.statusCode).to.equal(200);
        expect(siResponse.headers['content-type']).to.equal('text/html');
        expect(siResponse.payload).to.contain('John');
        expect(siResponse.payload).to.contain('Jones');
        expect(siResponse.payload).to.contain('(555) 222-3333');
        done();
      });
    });
  });

});
