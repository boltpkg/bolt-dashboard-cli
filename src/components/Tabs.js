// @flow
import React, { type ElementType } from 'react';

type TabsItem = {
  title: string,
  render: () => any
};

const stylesheet = {
  tabsContainer: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  tabsContent: {
    top: 3,
    left: 0,
    height: '100%-3',
    width: '100%'
  },
  tabs: {
    top: 0,
    left: 0,
    width: '100%',
    height: 3,
    align: 'center',
    bg: '#333'
  },
  tab: {
    top: 0,
    width: 20,
    height: 3,
    bg: '#222',
    fg: 'white'
  },
  activeTab: {
    bold: true,
    bg: 'black',
    fg: 'white'
  },
  focusTab: {
    bg: '#555'
  }
};

type TabProps = {
  title: string,
  isActive: boolean,
  isFocused: boolean,
  offset: number,
  onClick: Function,
  onFocus: Function
};

function Tab(props: TabProps) {
  return (
    <box
      class={[
        stylesheet.tab,
        props.isFocused && stylesheet.focusTab,
        props.isActive && stylesheet.activeTab
      ]}
      align="center"
      valign="middle"
      left={props.offset}
      clickable
      onClick={props.onClick}
      onFocus={props.onFocus}
    >
      {props.title.toUpperCase()}
    </box>
  );
}

type TabsProps = {
  screen: Object,
  items: Array<TabsItem>
};

type TabsState = {
  activeIndex: number,
  focusIndex: number
};

export default class Tabs extends React.Component<TabsProps, TabsState> {
  state = {
    activeIndex: 0,
    focusIndex: 0
  };

  handleTabClick = (index: number) => {
    this.setState({
      activeIndex: index,
      focusIndex: index
    });
  };

  handleTabFocus = (index: number) => {
    this.setState({
      focusIndex: index
    });
  };

  handlePrevTab = () => {
    let index = this.state.focusIndex;
    if (index > 0) {
      this.setState({ focusIndex: index - 1 });
    }
  };

  handleNextTab = () => {
    let index = this.state.focusIndex;
    if (index < this.props.items.length - 1) {
      this.setState({ focusIndex: index + 1 });
    }
  };

  handleEnter = () => {
    if (this.state.activeIndex !== this.state.focusIndex) {
      this.setState({
        activeIndex: this.state.focusIndex
      });
    }
  };

  componentDidMount() {
    this.props.screen.key(['h', 'left'], this.handlePrevTab);
    this.props.screen.key(['l', 'right'], this.handleNextTab);
    this.props.screen.key(['enter'], this.handleEnter);
  }

  render() {
    let activeTab = this.props.items[this.state.activeIndex];
    return (
      <box class={stylesheet.tabsContainer}>
        <box class={stylesheet.tabs}>
          {this.props.items.map((item, index) => {
            let isActive = index === this.state.activeIndex;
            let isFocused = index === this.state.focusIndex;
            return (
              <Tab
                key={String(Math.random())}
                title={item.title}
                isActive={isActive}
                isFocused={isFocused}
                offset={index * 20}
                onClick={() => this.handleTabClick(index)}
                onFocus={() => this.handleTabFocus(index)}
              />
            );
          })}
        </box>
        <box class={stylesheet.tabsContent}>{activeTab.render()}</box>
      </box>
    );
  }
}
