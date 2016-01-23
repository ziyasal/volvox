import uuid from 'node-uuid'

export default class GuidGenerator {
    static newGuid() {
        return uuid.v1();
    }
}