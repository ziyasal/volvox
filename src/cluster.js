/**
 *
 */
export default class Cluster {

    /**
     *
     * @param clusterProvider
     * @param frameworkProvider
     * @param guidGenerator
     */
    constructor(clusterProvider, frameworkProvider, guidGenerator) {
        this._clusterProvider = clusterProvider;
        this._frameworkProvider = frameworkProvider;
        this._guidGenerator = guidGenerator;
    }

    /**
     *
     * @param name
     * @returns {*}
     */
    async findServiceInstancesAsync(name) {
        return await this._clusterProvider.findServiceInstancesAsync(name);
    }

    /**
     *
     * @param name
     * @returns {*}
     */
    async findServiceInstanceAsync(name) {
        return await this._clusterProvider.findServiceInstanceAsync(name);
    }

    /**
     *
     */
    async bootstrapClient() {
        await this._clusterProvider.bootstrapClientAsync();
    }

    /**
     *
     * @param server
     * @param serviceName
     * @param version
     */
    async bootstrap(server, serviceName, version) {
        var startResult = await this._frameworkProvider.start(server, serviceName, version);
        var serviceId = serviceName + this._guidGenerator.newGuid();
        await this._clusterProvider.registerServiceAsync(serviceName, serviceId, version, startResult.uri);
    }
}
