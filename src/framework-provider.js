export default class FrameworkProvider {
    start(server, serviceName, version) {
        throw new Error("should be implemented in subclasses");
    }
}