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

var _Process = require('../util/Process');

var _Process2 = _interopRequireDefault(_Process);

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
      ch: '⚡️'
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
      ch: '⚡️',
      inverse: true
    }
  }
};

var ProcessDisplay = (function(_React$Component) {
  (0, _inherits3.default)(ProcessDisplay, _React$Component);

  function ProcessDisplay() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProcessDisplay);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        _React$Component.call.apply(_React$Component, [this].concat(args))
      )),
      _this)),
      (_this.state = {
        logs: _this.props.process.logs
      }),
      (_this.onLog = function() {
        _this.setState({
          logs: _this.props.process.logs
        });
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  ProcessDisplay.prototype.componentDidMount = function componentDidMount() {
    this.props.process.on('log', this.onLog);
  };

  ProcessDisplay.prototype.componentWillReceiveProps = function componentWillReceiveProps(
    nextProps
  ) {
    this.props.process.removeListener('log', this.onLog);
    nextProps.process.on('log', this.onLog);
  };

  ProcessDisplay.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.process.removeListener('log', this.onLog);
  };

  ProcessDisplay.prototype.render = function render() {
    var _props$process = this.props.process,
      command = _props$process.command,
      args = _props$process.args;
    var logs = this.state.logs;

    return _react2.default.createElement(
      'box',
      { class: stylesheet.container },
      _react2.default.createElement(
        'box',
        { class: stylesheet.stdout },
        logs.toString()
      )
    );
  };

  return ProcessDisplay;
})(_react2.default.Component);

exports.default = ProcessDisplay;
