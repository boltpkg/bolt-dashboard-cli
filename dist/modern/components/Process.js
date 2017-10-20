'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
class Process extends _react2.default.Component {
  render() {
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
  }
}
exports.default = Process;
