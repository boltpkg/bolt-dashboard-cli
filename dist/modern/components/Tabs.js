'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
    fg: 'white',
    border: {
      ch: '⚡️'
    }
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

function Tab(props) {
  return _react2.default.createElement(
    'box',
    {
      class: [
        stylesheet.tab,
        props.isFocused && stylesheet.focusTab,
        props.isActive && stylesheet.activeTab
      ],
      align: 'center',
      valign: 'middle',
      left: props.offset,
      clickable: true,
      onClick: props.onClick,
      onFocus: props.onFocus
    },
    props.title.toUpperCase()
  );
}

class Tabs extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return (
      (_temp = super(...args)),
      (this.state = {
        activeIndex: 0,
        focusIndex: 0
      }),
      (this.handleTabClick = index => {
        this.setState({
          activeIndex: index,
          focusIndex: index
        });
      }),
      (this.handleTabFocus = index => {
        this.setState({
          focusIndex: index
        });
      }),
      (this.handlePrevTab = () => {
        let index = this.state.focusIndex;
        if (index > 0) {
          this.setState({ focusIndex: index - 1 });
        }
      }),
      (this.handleNextTab = () => {
        let index = this.state.focusIndex;
        if (index < this.props.items.length - 1) {
          this.setState({ focusIndex: index + 1 });
        }
      }),
      (this.handleEnter = () => {
        if (this.state.activeIndex !== this.state.focusIndex) {
          this.setState({
            activeIndex: this.state.focusIndex
          });
        }
      }),
      _temp
    );
  }

  componentDidMount() {
    this.props.screen.key(['h', 'left'], this.handlePrevTab);
    this.props.screen.key(['l', 'right'], this.handleNextTab);
    this.props.screen.key(['enter'], this.handleEnter);
  }

  render() {
    let activeTab = this.props.items[this.state.activeIndex];
    return _react2.default.createElement(
      'box',
      { class: stylesheet.tabsContainer },
      _react2.default.createElement(
        'box',
        { class: stylesheet.tabs },
        this.props.items.map((item, index) => {
          let isActive = index === this.state.activeIndex;
          let isFocused = index === this.state.focusIndex;
          return _react2.default.createElement(Tab, {
            key: String(Math.random()),
            title: item.title,
            isActive: isActive,
            isFocused: isFocused,
            offset: index * 20,
            onClick: () => this.handleTabClick(index),
            onFocus: () => this.handleTabFocus(index)
          });
        })
      ),
      _react2.default.createElement(
        'box',
        { class: stylesheet.tabsContent },
        activeTab.render()
      )
    );
  }
}
exports.default = Tabs;
