import uuid from 'node-uuid'

/**
 *
 */
export default class GuidGenerator {
    /**
     *
     * @returns {*}
     */
    newGuid() {
        return uuid.v1();
    }
}