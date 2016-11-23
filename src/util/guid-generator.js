import uuid from 'uuid'

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