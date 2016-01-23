export default class ClusterProvider {

    findServiceInstancesAsync(name) {
        throw new Error("should be implemented in subclasses");
    }

    registerServiceAsync(serviceName, serviceId, version, uri) {
        throw new Error("should be implemented in subclasses");
    }

    async bootstrapClientAsync() {
        throw new Error("should be implemented in subclasses");
    }

    async findServiceInstanceAsync(serviceName) {
        var res = await this.findServiceInstancesAsync(serviceName);
        if (res.length === 0)
            throw new Error("Could not find service");

        //TODO: Thread Local Random
        return res[res.length];
    }
}