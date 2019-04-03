"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

        var labelClass = "xzp-checkbox-label";
        var spanClass = "xzp-checkbox";
        if (props.checked) {
            spanClass += " xzp-checkbox-checked";
        }
        if (props.disabled) {
            labelClass += " xzp-checkbox-label-disabled";
            spanClass += " xzp-checkbox-disabled";
        }
        _this.state = {
            isChecked: true,
            labelClass: labelClass,
            spanClass: spanClass
        };
        _this.onCheck = _this.onCheck.bind(_this);
        return _this;
    }

    _createClass(Checkbox, [{
        key: "onCheck",
        value: function onCheck(e) {
            var spanClass = "xzp-checkbox";
            spanClass += this.state.isChecked ? " xzp-checkbox-checked" : "";
            this.setState({
                isChecked: !this.state.isChecked,
                spanClass: spanClass
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "label",
                { className: this.state.labelClass },
                _react2.default.createElement(
                    "span",
                    { className: this.state.spanClass },
                    _react2.default.createElement("input", { className: "xzp-checkbox-input", name: this.props.name, disabled: this.props.disabled, onClick: this.onCheck, value: this.props.value, checked: this.props.checked, type: "checkbox" }),
                    _react2.default.createElement("span", { className: "xzp-checkbox-inner" })
                ),
                _react2.default.createElement(
                    "span",
                    { className: "checkbox-content" },
                    this.props.children
                )
            );
        }
    }]);

    return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;