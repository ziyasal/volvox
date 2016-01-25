import uuid from 'node-uuid'

export default class GuidGenerator {
    newGuid() {
        return uuid.v1();
    }
}