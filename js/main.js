import DataLoaderLaunch from './modules/DataLoaders/DataLoaderLaunch.mjs';
import Algoritmeregister from './modules/Algoritmeregister.mjs';

var algoritmeregisterApp = new Algoritmeregister();
var dataLoader = new DataLoaderLaunch();

document.getElementById("search-bar").onkeyup = function () {
    algoritmeregisterApp.filter(this.value);
};

algoritmeregisterApp.addData(await dataLoader.getData("/testdata/launch.json"));
algoritmeregisterApp.render();
