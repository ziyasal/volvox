import "babel-polyfill";

import chai from "chai";
import sinon from "sinon";
import Configuration from "../lib/configuration";

import uriValidator from 'valid-url';

chai.should();

describe("Configuration:", () => {
    let configuration, result = null;
    describe("#getUri", () => {

        before(() => {
            configuration = new Configuration();
        });

        it("should return uri.", async ()=> {
            result = await configuration.getUri();
            (!!uriValidator.isUri(result)).should.be.true;
        });

        it("should return available port.", async ()=> {
            result = await configuration.port();
            result.should.be.at.least(0);
        });

        it("should throw.", ()=> {
            (()=> {
                throw  new Error();
            }).should.throw(Error);
        });
    });
});