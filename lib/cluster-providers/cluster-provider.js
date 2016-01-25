"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClusterProvider = function () {
    function ClusterProvider() {
        _classCallCheck(this, ClusterProvider);
    }

    _createClass(ClusterProvider, [{
        key: "findServiceInstancesAsync",
        value: function findServiceInstancesAsync(name) {
            return regeneratorRuntime.async(function findServiceInstancesAsync$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.abrupt("return", new Promise(function (resove, reject) {
                                return reject(new Error("should be implemented in subclasses"));
                            }));

                        case 1:
                        case "end":
                            return _context.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: "registerServiceAsync",
        value: function registerServiceAsync(serviceName, serviceId, version, uri) {
            return regeneratorRuntime.async(function registerServiceAsync$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            return _context2.abrupt("return", new Promise(function (resove, reject) {
                                return reject(new Error("should be implemented in subclasses"));
                            }));

                        case 1:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: "bootstrapClientAsync",
        value: function bootstrapClientAsync() {
            return regeneratorRuntime.async(function bootstrapClientAsync$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            return _context3.abrupt("return", new Promise(function (resove, reject) {
                                return reject(new Error("should be implemented in subclasses"));
                            }));

                        case 1:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: "findServiceInstanceAsync",
        value: function findServiceInstanceAsync(serviceName) {
            var res;
            return regeneratorRuntime.async(function findServiceInstanceAsync$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return regeneratorRuntime.awrap(this.findServiceInstancesAsync(serviceName));

                        case 2:
                            res = _context4.sent;

                            if (!(res.length === 0)) {
                                _context4.next = 5;
                                break;
                            }

                            throw new Error("Could not find service");

                        case 5:
                            return _context4.abrupt("return", res[res.length]);

                        case 6:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, null, this);
        }
    }]);

    return ClusterProvider;
}();

exports.default = ClusterProvider;