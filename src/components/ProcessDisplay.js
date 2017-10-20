// @flow
import React from 'react';
import Process from '../util/Process';

const stylesheet = {
  container: {
    top: 1,
    left: 2,
    right: 2,
    bottom: 1
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

type ProcessDisplayProps = {
  process: Process
};

type ProcessDisplayState = {
  logs: string
};

export default class ProcessDisplay extends React.Component<
  ProcessDisplayProps,
  ProcessDisplayState
> {
  state = {
    logs: this.props.process.logs
  };

  componentDidMount() {
    this.props.process.on('log', this.onLog);
  }

  componentWillReceiveProps(nextProps: ProcessDisplayProps) {
    this.props.process.removeListener('log', this.onLog);
    nextProps.process.on('log', this.onLog);
  }

  componentWillUnmount() {
    this.props.process.removeListener('log', this.onLog);
  }

  onLog = () => {
    this.setState({
      logs: this.props.process.logs
    });
  };

  render() {
    let { command, args } = this.props.process;
    let { logs } = this.state;

    return (
      <box class={stylesheet.container}>
        {/* <box class={stylesheet.title}>
        </box> */}
        <box class={stylesheet.stdout}>{logs.toString()}</box>
      </box>
    );
  }
}
