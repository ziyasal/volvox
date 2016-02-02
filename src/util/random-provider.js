export default class RandomProvider {
    next(low, high) {
        return Math.floor(Math.random() * (high - low) + low);
    }
}