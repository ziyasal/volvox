export default class ServiceInformation {
    /**
     *
     * @param serviceAddress
     * @param servicePort
     */
    constructor(serviceAddress, servicePort) {
        this.__port = servicePort;
        this.__address = serviceAddress;
    }

    /**
     *
     * @returns {*}
     */
    get port() {
        return this.__port;
    }

    /**
     *
     * @returns {*}
     */
    get address() {
        return this.__address;
    }
}