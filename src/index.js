// @flow
import React from 'react';
import { render } from 'react-blessed';
import blessed from 'blessed';
import Dashboard from './components/Dashboard';
import Process from './util/Process';

const processesConfig = [
  {
    command: 'yarn',
    args: ['babel', 'src', '-d', 'dist', '--watch', '--color']
  },
  {
    command: 'yarn',
    args: ['jest', '--watch', '--color']
  }
];

const processes = processesConfig.map(proc => {
  return new Process(proc.command, proc.args);
});

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Bolt Dashboard'
});

screen.key(['escape', 'q', 'C-c'], () => {
  return process.exit(0);
});

render(<Dashboard screen={screen} processes={processes} />, screen);
