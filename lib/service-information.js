"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceInformation = function () {
    function ServiceInformation(serviceAddress, servicePort) {
        _classCallCheck(this, ServiceInformation);

        this.__port = servicePort;
        this.__address = serviceAddress;
    }

    _createClass(ServiceInformation, [{
        key: "port",
        get: function get() {
            return this.__port;
        }
    }, {
        key: "address",
        get: function get() {
            return this.__address;
        }
    }]);

    return ServiceInformation;
}();

exports.default = ServiceInformation;