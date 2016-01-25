'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _guidGenerator = require('./util/guid-generator');

var _guidGenerator2 = _interopRequireDefault(_guidGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cluster = function () {
    function Cluster(clusterProvider, frameworkProvider, guidGenerator) {
        _classCallCheck(this, Cluster);

        this._clusterProvider = clusterProvider;
        this._frameworkProvider = frameworkProvider;
        this._guidGenerator = guidGenerator;
    }

    _createClass(Cluster, [{
        key: 'findServiceInstancesAsync',
        value: function findServiceInstancesAsync(name) {
            return regeneratorRuntime.async(function findServiceInstancesAsync$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return regeneratorRuntime.awrap(this._clusterProvider.findServiceInstancesAsync(name));

                        case 2:
                            return _context.abrupt('return', _context.sent);

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'findServiceInstanceAsync',
        value: function findServiceInstanceAsync(name) {
            return regeneratorRuntime.async(function findServiceInstanceAsync$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return regeneratorRuntime.awrap(this._clusterProvider.findServiceInstanceAsync(name));

                        case 2:
                            return _context2.abrupt('return', _context2.sent);

                        case 3:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'bootstrapClient',
        value: function bootstrapClient() {
            return regeneratorRuntime.async(function bootstrapClient$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return regeneratorRuntime.awrap(this._clusterProvider.bootstrapClientAsync());

                        case 2:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'bootstrap',
        value: function bootstrap(serviceName, version) {
            var uri, serviceId;
            return regeneratorRuntime.async(function bootstrap$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            uri = this._frameworkProvider.start(serviceName, version);
                            serviceId = serviceName + this._guidGenerator.newGuid();
                            _context4.next = 4;
                            return regeneratorRuntime.awrap(this._clusterProvider.registerServiceAsync(serviceName, serviceId, version, uri));

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, null, this);
        }
    }]);

    return Cluster;
}();

exports.default = Cluster;