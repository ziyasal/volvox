import "babel-polyfill";

import chai from "chai";

import {ClusterProvider} from "../src/index";


chai.should();

describe("ClusterProvider:", () => {
    let clusterProvider, result = null;

    beforeEach(() => {
        clusterProvider = new ClusterProvider();
    });

    describe("#ctor", () => {

        it("should create instance.", ()=> {
            (!!clusterProvider).should.be.equal(true);
        });
    });

    describe("#findServiceInstancesAsync", () => {
        it("should throw.", async()=> {

            try {
                await clusterProvider.findServiceInstancesAsync();
            } catch (err) {
                err.should.be.instanceOf(Error);
            }
        });
    });

    describe("#registerServiceAsync", () => {
        it("should throw.", async ()=> {

            try {
                await clusterProvider.registerServiceAsync();
            } catch (err) {
                err.should.be.instanceOf(Error);
            }
        });
    });

    describe("#bootstrapClientAsync", async () => {
        it("should throw.", async ()=> {

            try {
                await clusterProvider.bootstrapClientAsync();
            } catch (err) {
                err.should.be.instanceOf(Error);
            }
        });
    });

    describe("#findServiceInstanceAsync", () => {

        //TODO:

    });
});