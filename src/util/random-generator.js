/**
 *Provides random number between given numbers
 */
export default class RandomGenerator {
    /**
     *
     * @param low {Number}
     * @param high {Number}
     * @returns {Number}
     */
    next(low, high) {
        return Math.floor(Math.random() * (high - low) + low);
    }
}