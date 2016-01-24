import "babel-polyfill";

import chai from "chai";
import validator from 'validator';
import {GuidGenerator} from "../index";


chai.should();

describe("GuidGenerator:", () => {
    let guidGenerator;

    beforeEach(() => {
        guidGenerator = new GuidGenerator();
    });

    describe("#ctor", () => {

        it("should create instance.", ()=> {
            (!!guidGenerator).should.be.equal(true);
        });
    });

    describe("#newGuid", () => {

        it("should get valid guid.", ()=> {

            var guid = guidGenerator.newGuid();
            validator.isUUID(guid).should.be.equal(true);
        });
    });
});