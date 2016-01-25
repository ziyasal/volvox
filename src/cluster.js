import Guid from './util/guid-generator'

export default class Cluster {

    constructor(clusterProvider, frameworkProvider, guidGenerator) {
        this._clusterProvider = clusterProvider;
        this._frameworkProvider = frameworkProvider;
        this._guidGenerator = guidGenerator;
    }

    async findServiceInstancesAsync(name) {
        return await this._clusterProvider.findServiceInstancesAsync(name);
    }

    async findServiceInstanceAsync(name) {
        return await this._clusterProvider.findServiceInstanceAsync(name);
    }

    async bootstrapClient() {
        await this._clusterProvider.bootstrapClientAsync();
    }

    async bootstrap(serviceName, version) {
        var uri = this._frameworkProvider.start(serviceName, version);
        var serviceId = serviceName + this._guidGenerator.newGuid();
        await this._clusterProvider.registerServiceAsync(serviceName, serviceId, version, uri);
    }
}