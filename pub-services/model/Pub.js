const Beer = require('./Beer.js');
const OpenHours = require('./OpenHours.js');
const Owner = require('./Owner.js');

class Pub {
    contructor(pubJson) {
        this.name = pubJson.name;
        this.owner = new Owner(pubJson.owner.firstName, pubJson.owner.lastName, pubJson.owner.mail);
        this.owner.print();

        this.openDays = pubJson.openDays;
        this.openHours = new OpenHours(pubJson.openHours.start, pubJson.openHours.end);
        this.openHours.print();

        this.beers = pubJson.beers.map( beerJson => new Beer(beerJson.type, beerJson.name) );
/*        this.beers = _.forEach(
            pubJson.beers,
            beerJson => new Beer(beerJson.type, beerJson.name)
        );*/
        this.beers.print();
    }
    toString () {
        return `${this.name} | ${this.owner} | ${this.openDays} | ${this.openHours} | ${this.beers}`
    }

    print () {
        console.log( this.toString() );
    }
}

module.exports = Pub;