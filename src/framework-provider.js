export default class FrameworkProvider {
    /**
     *
     * @param server
     * @param serviceName
     * @param version
     */
    start(server, serviceName, version) {
        throw new Error("should be implemented in subclasses");
    }
}