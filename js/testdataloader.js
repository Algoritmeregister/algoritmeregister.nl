import DataLoaderDenHaag from './modules/DataLoaderDenHaag.mjs';
import DataLoaderUtrecht from './modules/DataLoaderUtrecht.mjs';
import DataLoaderStandardV03 from './modules/DataLoaderStandard-v0.3.mjs';
import Algoritmeregister from './modules/Algoritmeregister.mjs';

var dataLoaders = {
    "Algoritmeregister-v0.3": DataLoaderStandardV03,
    "DenHaag": DataLoaderDenHaag,
    "Utrecht": DataLoaderUtrecht
};

var algoritmeregisters = await fetch ('/data/algoritmeregisters.json').then(rs => rs.json()).then(rs => rs["algoritmeregisters"]);

var algoritmeregisterApp = new Algoritmeregister();

for (var i in algoritmeregisters) {
    if (algoritmeregisters[i].standard) {
        var dataLoader = new (dataLoaders[algoritmeregisters[i].standard])();
        algoritmeregisterApp.addData(await dataLoader.getData(algoritmeregisters[i].json));
    }
}

document.getElementById("search-bar").onkeyup = function () { algoritmeregisterApp.filter(this.value); };

algoritmeregisterApp.render();
