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

    async bootstrap(server, serviceName, version) {
        var result = await this._frameworkProvider.start(server, serviceName, version);
        var serviceId = serviceName + this._guidGenerator.newGuid();
        await this._clusterProvider.registerServiceAsync(serviceName, serviceId, version, result.uri);
    }
}