import DataLoaderLaunch from './modules/DataLoaders/DataLoaderLaunch.mjs';
import Algoritmeregister from './modules/Algoritmeregister.mjs';

var dataLoader = new DataLoaderLaunch();
var algoritmeregisterApp = new Algoritmeregister(await dataLoader.getSchema("/testdata/launch.schema.json"));
algoritmeregisterApp.addData(await dataLoader.getData("/testdata/launch.json"));
