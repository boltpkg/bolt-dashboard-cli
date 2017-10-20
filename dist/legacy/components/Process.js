'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var stylesheet = {
  container: {
    top: 1,
    left: 2,
    right: 2,
    bottom: 1,
    border: {
      type: 'line',
      fg: '#333'
    }
  },
  title: {
    top: -1,
    left: 1,
    width: 'shrink',
    height: 1,
    bg: 'black',
    fg: 'green'
  },
  stdout: {
    top: 1,
    left: 2,
    right: 2,
    bottom: 1,
    mouse: true,
    scrollable: true,
    input: true,
    alwaysScroll: true,
    scrollbar: {
      ch: ' ',
      inverse: true
    }
  }
};

var Process = (function(_React$Component) {
  (0, _inherits3.default)(Process, _React$Component);

  function Process() {
    (0, _classCallCheck3.default)(this, Process);
    return (0, _possibleConstructorReturn3.default)(
      this,
      _React$Component.apply(this, arguments)
    );
  }

  Process.prototype.render = function render() {
    return _react2.default.createElement(
      'box',
      { class: stylesheet.container },
      _react2.default.createElement(
        'box',
        { class: stylesheet.title },
        ` ${this.props.command} `
      ),
      _react2.default.createElement(
        'box',
        { class: stylesheet.stdout },
        this.props.stdout
      )
    );
  };

  return Process;
})(_react2.default.Component);

exports.default = Process;
