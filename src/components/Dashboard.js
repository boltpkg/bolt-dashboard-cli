// @flow
import React from 'react';
import Tabs from './Tabs';
import ProcessDisplay from './ProcessDisplay';
import Process from '../util/Process';

type Props = {
  screen: Object,
  processes: Array<Process>
};

function lines(str, length) {
  return new Array(length)
    .fill(str)
    .map((str, i) => `${str} (${i})`)
    .join('\n');
}

const stylesheet = {
  dashboard: {}
};

export default function Dashboard(props: Props) {
  return (
    <box class={stylesheet.dashboard}>
      <Tabs
        screen={props.screen}
        items={props.processes.map(proc => {
          return {
            title: `${proc.command} ${proc.args[0]}`,
            render: () => <ProcessDisplay key={Math.random()} process={proc} />
          };
        })}
      />
    </box>
  );
}
