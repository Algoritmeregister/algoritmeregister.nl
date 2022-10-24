import DataLoaderDenHaag from './modules/DataLoaderDenHaag.mjs';
import DataLoaderUtrecht from './modules/DataLoaderUtrecht.mjs';
import DataLoaderStandardV03 from './modules/DataLoaderStandard-v0.3.mjs';
import Algoritmeregister from './modules/Algoritmeregister.mjs';


var algoritmeregister = new Algoritmeregister();

var dataLoaderDenHaag = new DataLoaderDenHaag();
algoritmeregister.addData(await dataLoaderDenHaag.getData());

var dataLoaderUtrecht = new DataLoaderUtrecht();
algoritmeregister.addData(await dataLoaderUtrecht.getData());

var dataLoaderAmsterdam = new DataLoaderStandardV03();
algoritmeregister.addData(await dataLoaderAmsterdam.getData('/testdata/amsterdam.json'));

document.getElementById("search-bar").onkeyup = function () { algoritmeregister.filter(this.value); };

algoritmeregister.render();
