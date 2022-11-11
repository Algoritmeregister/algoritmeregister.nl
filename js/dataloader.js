import DataLoaderDenHaag from './modules/DataLoaders/DataLoaderDenHaag.mjs';
import DataLoaderUtrecht from './modules/DataLoaders/DataLoaderUtrecht.mjs';
import DataLoaderStandardV03 from './modules/DataLoaders/DataLoaderStandard-v0.3.mjs';
import DataLoaderRvIG from './modules/DataLoaders/DataLoaderRvIG.mjs';
import DataLoaderUWV from './modules/DataLoaders/DataLoaderUWV.mjs';
import Algoritmeregister from './modules/Algoritmeregister.mjs';

var dataLoaders = {
    "https://standaard.algoritmeregister.org/schemas/registration-v0.3.schema.json": DataLoaderStandardV03,
    "DenHaag": DataLoaderDenHaag,
    "Utrecht": DataLoaderUtrecht,
    "RvIG": DataLoaderRvIG,
    "UWV": DataLoaderUWV
};

var algoritmeregisters = await fetch ('/data/algoritmeregisters.json').then(rs => rs.json()).then(rs => rs["algoritmeregisters"]);

var algoritmeregisterApp = new Algoritmeregister();

for (var i in algoritmeregisters) {
    if (algoritmeregisters[i].include) {
        var dataLoader = new (dataLoaders[algoritmeregisters[i].schema])();
        algoritmeregisterApp.addData(await dataLoader.getData(algoritmeregisters[i].json));
    }
}

document.getElementById("search-bar").onkeyup = function () {
    algoritmeregisterApp.filter(this.value);
};

algoritmeregisterApp.render();
