import "babel-polyfill";

import chai from "chai";

import {ServiceInformation} from "../src/index";


chai.should();

describe("ServiceInformation:", () => {
    let serviceInformation,
        port = 666,
        serviceAddress = "http://localhost:666/api/v1/bla";

    beforeEach(() => {
        serviceInformation = new ServiceInformation(serviceAddress, port);
    });

    describe("#ctor", () => {

        it("should create instance.", ()=> {
            (!!serviceInformation).should.be.equal(true);
        });
    });

    describe("#port", () => {

        it("should get port.", ()=> {
            serviceInformation.port.should.be.equal(port);
        });
    });

    describe("#adress", () => {

        it("should get address.", ()=> {
            serviceInformation.address.should.be.equal(serviceAddress);
        });
    });
});