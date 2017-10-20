'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBlessed = require('react-blessed');

var _blessed = require('blessed');

var _blessed2 = _interopRequireDefault(_blessed);

var _Dashboard = require('./components/Dashboard');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Process = require('./util/Process');

var _Process2 = _interopRequireDefault(_Process);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const processesConfig = [
  {
    command: 'yarn',
    args: ['babel', 'src', '-d', 'lib', '--watch', '--color']
  },
  {
    command: 'yarn',
    args: ['jest', '--watch', '--color']
  }
];

const processes = processesConfig.map(proc => {
  return new _Process2.default(proc.command, proc.args);
});

const screen = _blessed2.default.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Bolt Dashboard'
});

screen.key(['escape', 'q', 'C-c'], () => {
  return process.exit(0);
});

(0, _reactBlessed.render)(
  _react2.default.createElement(_Dashboard2.default, {
    screen: screen,
    processes: processes
  }),
  screen
);
