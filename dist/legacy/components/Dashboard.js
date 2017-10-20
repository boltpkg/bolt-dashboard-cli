'use strict';

exports.__esModule = true;
exports.default = Dashboard;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _ProcessDisplay = require('./ProcessDisplay');

var _ProcessDisplay2 = _interopRequireDefault(_ProcessDisplay);

var _Process = require('../util/Process');

var _Process2 = _interopRequireDefault(_Process);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function lines(str, length) {
  return new Array(length)
    .fill(str)
    .map(function(str, i) {
      return `${str} (${i})`;
    })
    .join('\n');
}

var stylesheet = {
  dashboard: {
    border: {
      ch: '⚡️'
    }
  }
};

function Dashboard(props) {
  return _react2.default.createElement(
    'box',
    { class: stylesheet.dashboard },
    _react2.default.createElement(_Tabs2.default, {
      screen: props.screen,
      items: props.processes.map(function(proc) {
        return {
          title: `${proc.command} ${proc.args[0]}`,
          render: function render() {
            return _react2.default.createElement(_ProcessDisplay2.default, {
              key: Math.random(),
              process: proc
            });
          }
        };
      })
    })
  );
}
