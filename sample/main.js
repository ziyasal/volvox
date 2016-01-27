import "babel-polyfill";

import {Cluster, ClusterProvider, GuidGenerator, FrameworkProvider} from '../src/index';

async function main() {
    try {
        let clusterProvider = new ClusterProvider();
        let frameworkProvider = new FrameworkProvider();
        let guidGenerator = new GuidGenerator();
        let cluster = new Cluster(clusterProvider, frameworkProvider, guidGenerator);

        await cluster.bootstrap("customers", "v1");

    } catch (error) {
        console.error(error);
    }
}

main();
console.log("STARTED");