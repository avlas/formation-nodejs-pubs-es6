const _ = require('lodash');

const pubsJson = require('../mocks/pubs.json');
const Pub = require('../model/Pub.js');             // Pub.Pub

// const Beer = require('../model/Beer.js');
// const OpenHours = require('../model/OpenHours.js');
// const Owner = require('../model/Owner.js');

// function parseJsonToObject(pubJson) {
//    this.owner = new Owner(pubJson.owner.firstName, pubJson.owner.lastName, pubJson.owner.mail);
//    this.openHours = new OpenHours(pubJson.openHours.start, pubJson.openHours.end);

    // this.beers = _.forEach(
    //     pubJson.beers,
    //     beerJson => new Beer(beerJson.type, beerJson.name)
    // );
//    this.beers = pubJson.beers.map( beerJson => new Beer(beerJson.type, beerJson.name) );

//     return new Pub(pubJson.name, owner, pubJson.openDays, openHours, beers);
// }

function listAllPubs() {
    return _.forEach(
        pubsJson,
        pubJson => new Pub(pubJson)
    );

   //return pubsJson.map( pubJson => new Pub(pubJson) );
}

function listOpenPubs(openDate) {
    return _.filter(
        listAllPubs(),
        pub => _.includes(pub.openDays, openDate)
    );
}

module.exports = {
    //jsonToObject: parseJsonToObject,
    listAll: listAllPubs,                           // la variable listAllPubs
    listOpen: listOpenPubs
};

// console.log('ALL PUBs', listAllPubs());
// console.log('ALL PUBs', listOpenPubs('Tuesday'));