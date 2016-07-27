import "babel-polyfill";

import chai from "chai";
import sinon from "sinon";

import {Volvox, ServiceInformation} from "../src/index";


chai.should();

describe("Volvox:", () => {
    let volvox,
        volvoxProvider = {
            findServiceInstancesAsync: function (serviceName) {
            }, findServiceInstanceAsync: function (serviceName) {
            }, bootstrapClientAsync: function () {
            }, registerServiceAsync: function (serviceName, serviceId, version, uri) {
            }
        },
        frameworkProvider = {
            start: function (serviceName, version) {
            }
        }, guidGenerator = {
            newGuid: function () {
            }
        }
        , volvoxProviderMock, frameworkProviderMock, guidGeneratorMock;

    beforeEach(() => {
        volvoxProviderMock = sinon.mock(volvoxProvider);
        frameworkProviderMock = sinon.mock(frameworkProvider);
        guidGeneratorMock = sinon.mock(guidGenerator);

        volvox = new Volvox(volvoxProvider, frameworkProvider, guidGenerator);
    });

    describe("#ctor", () => {

        it("should create instance.", ()=> {
            (!!volvox).should.be.equal(true);
        });
    });

    describe('#findServiceInstancesAsync', ()=> {

        it("should return service instances.", async ()=> {
            let serviceName = "test",
                port = 666,
                serviceAddress = "http://localhost:666/api/v1/bla",
                expected = [new ServiceInformation(serviceAddress, port)];

            volvoxProviderMock.expects('findServiceInstancesAsync')
                .withArgs(serviceName)
                .returns(expected)
                .once();

            let actual = await volvox.findServiceInstancesAsync(serviceName);

            actual.length.should.be.equal(expected.length);
            actual[0].address.should.be.equal(expected[0].address);
            actual[0].port.should.be.equal(expected[0].port);
        });
    });

    describe('#findServiceInstanceAsync', ()=> {

        it("should return service instance.", async ()=> {
            let serviceName = "test",
                port = 666,
                serviceAddress = "http://localhost:666/api/v1/bla",
                expected = new ServiceInformation(serviceAddress, port);

            volvoxProviderMock.expects('findServiceInstanceAsync')
                .withArgs(serviceName)
                .returns(expected)
                .once();

            let actual = await volvox.findServiceInstanceAsync(serviceName);

            actual.address.should.be.equal(expected.address);
            actual.port.should.be.equal(expected.port);
        });
    });

    describe('#bootstrapClient', ()=> {

        it("should have been called once.", async ()=> {

            volvoxProviderMock.expects('bootstrapClientAsync')
                .once();

            await volvox.bootstrapClient();
        });
    });

    describe('#bootstrap', ()=> {

        it("should have been called once.", async ()=> {
            let serviceName = "test", version = "v1",
                guid = "4e6605c7-bf83-4513-9fd5-d975314d8e52",
                serviceId = serviceName + guid,
                startResult = {uri: "http://localhost:666/api/v1/bla"},
                server = null;

            frameworkProviderMock.expects('start')
                .withArgs(server, serviceName, version)
                .returns(startResult)
                .once();

            guidGeneratorMock.expects("newGuid").returns(guid).once();

            volvoxProviderMock.expects('registerServiceAsync')
                .withArgs(serviceName, serviceId, version, startResult.uri)
                .once();

            await volvox.bootstrap(null, serviceName, version);
        });
    });

    afterEach(()=> {
        volvoxProviderMock.verify();
    })
});