import Guid from 'util/guid'

export default class Cluster {

    constructor(clusterProvider, frameworkProvider) {
        this._clusterProvider = clusterProvider;
        this._frameworkProvider = frameworkProvider;
    }

    findServiceInstancesAsync(name) {
        return this._clusterProvider.findServiceInstancesAsync(name);
    }

    findServiceInstanceAsync(name) {
        return this._clusterProvider.findServiceInstanceAsync(name);
    }

    bootstrapClient() {
        this._clusterProvider.BootstrapClientAsync().Wait();
    }

    bootstrap(serviceName, version) {
        var uri = this._frameworkProvider.start(serviceName, version);
        var serviceId = serviceName + Guid.newGuid();
        this._clusterProvider.registerServiceAsync(serviceName, serviceId, version, uri);
    }
}