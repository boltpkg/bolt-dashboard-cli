import EventEmitter from 'events';
import crossSpawn from 'cross-spawn';

export default class Process extends EventEmitter {
  child: Object;

  command: string;
  args: Array<string>;
  logs: Buffer = Buffer.from('');

  exited: boolean = false;
  exitCode: number | null = null;

  constructor(command: string, args: Array<string>) {
    super();

    this.command = command;
    this.args = args;
    this.child = crossSpawn(this.command, this.args, {});

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
