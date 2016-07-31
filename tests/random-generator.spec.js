import "babel-polyfill";

import chai from "chai";
import validator from 'validator';
import {RandomGenerator} from "../src/index";


chai.should();

describe("RandomGenerator:", () => {
    let randomGenerator;

    beforeEach(() => {
        randomGenerator = new RandomGenerator();
    });

    describe("#ctor", () => {

        it("should create instance.", ()=> {
            (!!randomGenerator).should.be.equal(true);
        });
    });

    describe("#next", () => {

        it("should generate random number between given range.", ()=> {

            var random = randomGenerator.next(10, 20);
            random.should.be.above(10);
            random.should.be.below(20);
        });
    });
});