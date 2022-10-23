import DataLoaderDenHaag from './modules/DataLoaderDenHaag.mjs';
import DataLoaderUtrecht from './modules/DataLoaderUtrecht.mjs';
import Algoritmeregister from './modules/Algoritmeregister.mjs';

var dataLoaderDenHaag = new DataLoaderDenHaag();
var dataLoaderUtrecht = new DataLoaderUtrecht();

var algoritmeregister = new Algoritmeregister();
algoritmeregister.addData(await dataLoaderDenHaag.getData());
algoritmeregister.addData(await dataLoaderUtrecht.getData());

document.getElementById("search-bar").onkeyup = function () { algoritmeregister.filter(this.value); };

algoritmeregister.render();
