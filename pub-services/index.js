// Fichier de mapping importe dans un autre module
const pubService = require('./services/pubs.service');

//  mappe and exporte les Services metiers expose a l'exterieur
module.exports = {
    services: {
        pubService : pubService
    }
}

const allPubs = pubService.listAll();
console.log( 'ALL PUBS : ', allPubs );

const openPubs = pubService.listOpen('Tuesday');
console.log(  'OPEN PUBS : ', openPubs );

