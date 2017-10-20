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

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

var _crossSpawn = require('cross-spawn');

var _crossSpawn2 = _interopRequireDefault(_crossSpawn);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Process = (function(_EventEmitter) {
  (0, _inherits3.default)(Process, _EventEmitter);

  function Process(command, args) {
    (0, _classCallCheck3.default)(this, Process);

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      _EventEmitter.call(this)
    );

    _this.logs = Buffer.from('');
    _this.exited = false;
    _this.exitCode = null;

    _this.command = command;
    _this.args = args;
    _this.child = (0, _crossSpawn2.default)(_this.command, _this.args, {});

    _this.child.stdout.on('data', function(data) {
      _this.logs = Buffer.concat([_this.logs, data]);
    });

    _this.child.stderr.on('data', function(data) {
      _this.logs = Buffer.concat([_this.logs, data]);
    });

    _this.child.on('close', function(code) {
      _this.exited = true;
      _this.exitCode = code;
    });
    return _this;
  }

  Process.prototype.close = function close() {
    this.child.kill('SIGTERM');
  };

  return Process;
})(_events2.default);

exports.default = Process;
