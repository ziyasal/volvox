import uuid from 'node-uuid'

export default class Guid {
    static newGuid() {
        return uuid.v1();
    }
}