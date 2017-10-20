'use strict';

exports.__esModule = true;

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _crossSpawn = require('cross-spawn');

var _crossSpawn2 = _interopRequireDefault(_crossSpawn);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

class Process extends _events2.default {
  constructor(command, args) {
    super();

    this.logs = Buffer.from('');
    this.exited = false;
    this.exitCode = null;
    this.command = command;
    this.args = args;
    this.child = (0, _crossSpawn2.default)(this.command, this.args, {});

    this.child.stdout.on('data', data => {
      this.logs = Buffer.concat([this.logs, data]);
      this.emit('log');
    });

    this.child.stderr.on('data', data => {
      this.logs = Buffer.concat([this.logs, data]);
      this.emit('log');
    });

    this.child.on('close', code => {
      this.exited = true;
      this.exitCode = code;
    });
  }

  close() {
    this.child.kill('SIGTERM');
  }
}
exports.default = Process;
