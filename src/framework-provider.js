export default class FrameworkProvider {
    start(serviceName, version) {
        throw new Error("should be implemented in subclasses");
    }
}