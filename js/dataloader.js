import DataLoaderDenHaag from './modules/DataLoaderDenHaag.mjs';
import DataLoaderUtrecht from './modules/DataLoaderUtrecht.mjs';
import DataLoaderStandardV03 from './modules/DataLoaderStandard-v0.3.mjs';
import DataLoaderRvIG from './modules/DataLoaderRvIG.mjs';
import DataLoaderUWV from './modules/DataLoaderUWV.mjs';
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

document.getElementById("search-bar").onkeyup = function () { algoritmeregisterApp.filter(this.value); };

algoritmeregisterApp.render();
