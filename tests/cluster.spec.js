import "babel-polyfill";

import chai from "chai";
import sinon from "sinon";

import {Cluster, ServiceInformation} from "../index";


chai.should();

describe("Cluster:", () => {
    let cluster,
        clusterProvider = {
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
        , clusterProviderMock, frameworkProviderMock, guidGeneratorMock;

    beforeEach(() => {
        clusterProviderMock = sinon.mock(clusterProvider);
        frameworkProviderMock = sinon.mock(frameworkProvider);
        guidGeneratorMock = sinon.mock(guidGenerator);

        cluster = new Cluster(clusterProvider, frameworkProvider, guidGenerator);
    });

    describe("#ctor", () => {

        it("should create instance.", ()=> {
            (!!cluster).should.be.equal(true);
        });
    });

    describe('#findServiceInstancesAsync', ()=> {

        it("should return service instances.", async ()=> {
            let serviceName = "test",
                port = 666,
                serviceAddress = "http://localhost:666/api/v1/bla",
                expected = [new ServiceInformation(serviceAddress, port)];

            clusterProviderMock.expects('findServiceInstancesAsync')
                .withArgs(serviceName)
                .returns(expected)
                .once();

            let actual = await cluster.findServiceInstancesAsync(serviceName);

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

            clusterProviderMock.expects('findServiceInstanceAsync')
                .withArgs(serviceName)
                .returns(expected)
                .once();

            let actual = await cluster.findServiceInstanceAsync(serviceName);

            actual.address.should.be.equal(expected.address);
            actual.port.should.be.equal(expected.port);
        });
    });

    describe('#bootstrapClient', ()=> {

        it("should have been called once.", async ()=> {

            clusterProviderMock.expects('bootstrapClientAsync')
                .once();

            await cluster.bootstrapClient();
        });
    });

    describe('#bootstrap', ()=> {

        it("should have been called once.", async ()=> {
            let serviceName = "test", version = "v1",
                guid = "4e6605c7-bf83-4513-9fd5-d975314d8e52",
                serviceId = serviceName + guid,
                uri = "http://localhost:666/api/v1/bla";

            frameworkProviderMock.expects('start')
                .withArgs(serviceName, version)
                .returns(uri)
                .once();

            guidGeneratorMock.expects("newGuid").returns(guid).once();

            clusterProviderMock.expects('registerServiceAsync')
                .withArgs(serviceName, serviceId, version, uri)
                .once();

            await cluster.bootstrap(serviceName, version);
        });
    });

    afterEach(()=> {
        clusterProviderMock.verify();
    })
});