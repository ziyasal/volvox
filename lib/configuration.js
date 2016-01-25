'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _portfinder = require('portfinder');

var _portfinder2 = _interopRequireDefault(_portfinder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configuration = function () {
    function Configuration() {
        _classCallCheck(this, Configuration);
    }

    _createClass(Configuration, [{
        key: 'getUri',
        value: function getUri() {
            var port = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
            return regeneratorRuntime.async(function getUri$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!(port === 0)) {
                                _context.next = 6;
                                break;
                            }

                            _context.next = 3;
                            return regeneratorRuntime.awrap(this.__freeTcpPort());

                        case 3:
                            _context.t0 = _context.sent;
                            _context.next = 7;
                            break;

                        case 6:
                            _context.t0 = port;

                        case 7:
                            port = _context.t0;
                            return _context.abrupt('return', 'http://localhost:' + port);

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, null, this);
        }
    }, {
        key: 'getPort',
        value: function getPort() {
            return regeneratorRuntime.async(function getPort$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return regeneratorRuntime.awrap(this.__freeTcpPort());

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
        key: '__freeTcpPort',
        value: function __freeTcpPort() {
            return new Promise(function (resolve, reject) {
                _portfinder2.default.getPort(function (err, port) {
                    if (err) return reject(err);

                    resolve(port);
                });
            });
        }
    }]);

    return Configuration;
}();

exports.default = Configuration;