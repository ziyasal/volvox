export default class ServiceInformation {
    constructor(serviceAddress, servicePort) {
        this.__port = servicePort;
        this.__address = serviceAddress;
    }

    get port() {
        return this.__port;
    }

    get address() {
        return this.__address;
    }
}