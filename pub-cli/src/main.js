const pubServiceModule = require('pub-services');

const getAllPubs = function (){
    return pubServiceModule.services.pubService.listAll();
}

const getOpenPubs = function (openDate){
    return pubServiceModule.services.pubService.listOpen(openDate);
}

module.exports = {
    allPubs : getAllPubs,
    openPubs : getOpenPubs
}