import "babel-polyfill";

import chai from "chai";

import {FrameworkProvider} from "../src/index";


chai.should();

describe("FrameworkProvider:", () => {
    let frameworkProvider, result = null;

    beforeEach(() => {
        frameworkProvider = new FrameworkProvider();
    });

    describe("#ctor", () => {

        it("should create instance.", ()=> {
            (!!frameworkProvider).should.be.equal(true);
        });
    });

    describe("#start", () => {
        it("should throw.", ()=> {
            (()=> {
                frameworkProvider.start();
            }).should.throw(Error);
        });
    });
});