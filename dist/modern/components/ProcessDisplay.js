'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Process = require('../util/Process');

var _Process2 = _interopRequireDefault(_Process);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const stylesheet = {
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

class ProcessDisplay extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return (
      (_temp = super(...args)),
      (this.state = {
        logs: this.props.process.logs
      }),
      (this.onLog = () => {
        this.setState({
          logs: this.props.process.logs
        });
      }),
      _temp
    );
  }

  componentDidMount() {
    this.props.process.on('log', this.onLog);
  }

  componentWillReceiveProps(nextProps) {
    this.props.process.removeListener('log', this.onLog);
    nextProps.process.on('log', this.onLog);
  }

  componentWillUnmount() {
    this.props.process.removeListener('log', this.onLog);
  }

  render() {
    let { command, args } = this.props.process;
    let { logs } = this.state;

    return _react2.default.createElement(
      'box',
      { class: stylesheet.container },
      _react2.default.createElement(
        'box',
        { class: stylesheet.stdout },
        logs.toString()
      )
    );
  }
}
exports.default = ProcessDisplay;
