// LIBS  --------------------------------------
const chai = require('chai');
const expect = chai.expect;

// MODULE pub-services  --------------------------------------
const pubService = require('../services/pubs.service');
// const Pub = require('../model/Pub.js');

// createPub -------------------------------------------------------------------------
describe('pubService', function() {

    // describe('#parseJsonToObject', function() {
    //     it('given_pubJson_then_pubObject', function () {
    //         expect(pubService.jsonToObject()).to.be.a(instanceOf('Pub'));
    //     });
    // });

    describe('#listAllPubs()', function() {
        it('given_pubsJson_when_listAllPubs_PubsLength', function() {
            expect(pubService.listAll().length).to.equal(2);
        });
     });

    describe('#listOpenPubs()', function() {
        it('given_pubsJson_when_listOpenPubs_thenIsArray', function() {
            expect(pubService.listOpen('Tuesday')).to.be.an('array');
        });

        it('given_pubsJson_when_listOpenPubs_PubsLength', function() {
            expect(pubService.listOpen('Tuesday').length).to.equal(1);
        });
    });
});