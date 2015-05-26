'use strict';

process.env.NODE_ENV = 'test';

var expect = require('chai').expect,
  Lab = require('lab'),
  server = require('../server'),
  bookshelf = require('../config/bookshelf'),
  moment = require('moment');

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

describe('Contacts API', function() {

  var localContact = {
    contact: {
      first_name: 'Jack',
      middle_initial: undefined,
      last_name: 'Johnson',
      title: 'President',
      email: 'jjohnson@test.net',
      phone_number: '(555) 222-2034',
      street_address: '123 Some Street',
      city: 'Pittsburgh',
      state: 'PA',
      zip_code: '11223',
    }
  };

  describe('CRUD', function() {

    it('lists all contacts', function (done) {
      var options = {
        method: 'GET',
        url: '/api/contacts'
      };

      server.inject(options, function (response) {
        var result = response.result;

        expect(response.statusCode).to.equal(200);

        var contacts = JSON.parse(result);
        expect(contacts).to.be.instanceOf(Object);
        expect(contacts.contacts).to.be.instanceOf(Array);
        expect(contacts.contacts).to.have.length(2);

        done();
      });
    });

    it('lists a single contact, when given an id', function (done) {
      var options = {
        method: 'GET',
        url: '/api/contacts/1'
      };

      server.inject(options, function (response) {
        var result = response.result;

        expect(response.statusCode).to.equal(200);

        var contact = JSON.parse(result);
        expect(contact).to.be.instanceOf(Object);
        expect(contact.contact.first_name).to.equal('Joe');
        expect(contact.contact.middle_initial).to.equal(null);
        expect(contact.contact.last_name).to.equal('Smith');
        expect(contact.contact.created_at).to.not.equal(null);
        expect(contact.contact.updated_at).to.not.equal(null);

        done();
      });
    });

    it('creates a contact, response is created record object', function (done) {
      var options = {
        method: 'POST',
        url: '/api/contacts',
        payload: JSON.stringify(localContact)
      };

      server.inject(options, function (response) {
        var result = response.result;

        expect(response.statusCode).to.equal(200);
        var contact = JSON.parse(result);
        expect(contact).to.be.instanceOf(Object);

        // save this new contact for a subsequent test
        localContact = contact;

        expect(contact.contact.first_name).to.equal(localContact.contact.first_name);
        expect(contact.contact.middle_initial).to.equal(undefined);
        expect(contact.contact.last_name).to.equal(localContact.contact.last_name);
        expect(contact.contact.phone_number).to.equal(localContact.contact.phone_number);

        var created = moment(contact.contact.created_at);
        var updated = moment(contact.contact.updated_at);

        expect(created.isValid()).to.equal(true);
        expect(updated.isValid()).to.equal(true);

        done();
      });
    });

    it('persisted newly created contact', function (done) {
      var options = {
        method: 'GET',
        url: '/api/contacts/' + localContact.contact.id
      };

      server.inject(options, function (response) {
        var result = response.result;

        expect(response.statusCode).to.equal(200);

        var contact = JSON.parse(result);
        expect(contact).to.be.instanceOf(Object);
        expect(contact.contact.first_name).to.equal(localContact.contact.first_name);
        // note, once record is persisted, the previously unassigned middle_initial is null (not undefined)
        expect(contact.contact.middle_initial).to.equal(null);
        expect(contact.contact.last_name).to.equal(localContact.contact.last_name);
        expect(contact.contact.phone_number).to.equal(localContact.contact.phone_number);

        var created = moment(contact.contact.created_at);
        var updated = moment(contact.contact.updated_at);

        expect(created.isValid()).to.equal(true);
        expect(updated.isValid()).to.equal(true);

        done();
      });
    });

    it('updates a contact, response is updated record ', function (done) {
      // modify some data of the last created contact
      localContact.contact.first_name = 'Billy';
      localContact.contact.last_name = 'Smith';
      localContact.contact.phone_number = '(555) 111-2222';

      var options = {
        method: 'PUT',
        url: '/api/contacts/' + localContact.contact.id,
        payload: JSON.stringify(localContact)
      };

      server.inject(options, function (response) {
        var result = response.result;

        if (response.statusCode !== 200) {
          console.log('\nupdate result:\n', result); // will explain validation failure
        }
        expect(response.statusCode).to.equal(200);
        var contact = JSON.parse(result);
        expect(contact).to.be.instanceOf(Object);
        expect(contact.contact.first_name).to.equal(localContact.contact.first_name);
        expect(contact.contact.last_name).to.equal(localContact.contact.last_name);
        expect(contact.contact.phone_number).to.equal(localContact.contact.phone_number);
        expect(contact.contact.created_at).to.equal(localContact.contact.created_at);
        expect(contact.contact.updated_at).to.not.equal(localContact.contact.updated_at);

        var created = moment(contact.contact.created_at);
        var updated = moment(contact.contact.updated_at);

        expect(created.isValid()).to.equal(true);
        expect(updated.isValid()).to.equal(true);

        var now = moment();

        // expect the create time to be earlier than now
        expect(now.isAfter(created)).to.equal(true);
        expect(updated.isAfter(created)).to.equal(true);

        done();
      });
    });

    it('delete contact response is empty', function (done) {
      var options = {
        method: 'DELETE',
        url: '/api/contacts/' + localContact.contact.id,
        payload: JSON.stringify(localContact)
      };

      server.inject(options, function (response) {
        expect(response.statusCode).to.equal(200);
        expect(response.result).to.equal('{}');

        done();
      });
    });

    it('deletes the contact record', function (done) {
      var options = {
        method: 'GET',
        url: '/api/contacts'
      };

      server.inject(options, function (response) {
        expect(response.statusCode).to.equal(200);

        var contacts = JSON.parse(response.result);
        expect(contacts).to.be.instanceOf(Object);
        expect(contacts.contacts).to.be.instanceOf(Array);

        // Verify the deleted contact does not exist
        var deletedRecords = contacts.contacts.filter(function (contact) {
          return contact.id === localContact.contact.id;
        });
        expect(deletedRecords).to.have.length(0);

        done();
      });
    });
  });
});
