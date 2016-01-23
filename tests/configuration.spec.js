import "babel-polyfill";

import chai from "chai";
import sinon from "sinon";

import {Configuration} from "../index";

import uriValidator from 'valid-url';

chai.should();

describe("Configuration:", () => {
    let configuration, result = null;

    beforeEach(() => {
        configuration = new Configuration();
    });

    describe("#ctor", () => {

        it("should create instance.", ()=> {
            (!!configuration).should.be.equal(true);
        });
    });

    describe("#getUri", () => {

        it("should return uri.", async ()=> {
            result = await configuration.getUri();
            (!!uriValidator.isUri(result)).should.be.true;
        });

        it("should return available port.", async ()=> {
            result = await configuration.getPort();
            result.should.be.at.least(0);
        });
    });
});