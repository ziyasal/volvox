export default class ClusterProvider {
    /**
     *
     * @param randomGenerator {RandomGenerator}
     */
    constructor(randomGenerator) {
        this._randomGenerator = randomGenerator;
    }

    /**
     *
     * @param name
     * @returns {Promise}
     */
    async findServiceInstancesAsync(name) {
        return new Promise((resove, reject)=> {
            return reject(new Error("should be implemented in subclasses"))
        });
    }

    /**
     *
     * @param serviceName
     * @param serviceId
     * @param version
     * @param uri
     * @returns {Promise}
     */
    async  registerServiceAsync(serviceName, serviceId, version, uri) {
        return new Promise((resove, reject)=> {
            return reject(new Error("should be implemented in subclasses"))
        });
    }

    /**
     *
     * @returns {Promise}
     */
    async bootstrapClientAsync() {
        return new Promise((resove, reject)=> {
            return reject(new Error("should be implemented in subclasses"))
        });
    }

    /**
     *
     * @param serviceName
     * @returns {*}
     */
    async findServiceInstanceAsync(serviceName) {
        var res = await this.findServiceInstancesAsync(serviceName);
        if (res.length === 0)
            throw new Error("Could not find service");

        //INFO: Thread Local Random
        return res[this._randomGenerator.next(0, res.length)];
    }
}