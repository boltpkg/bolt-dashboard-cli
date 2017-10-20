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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var stylesheet = {
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

var Tabs = (function(_React$Component) {
  (0, _inherits3.default)(Tabs, _React$Component);

  function Tabs() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        _React$Component.call.apply(_React$Component, [this].concat(args))
      )),
      _this)),
      (_this.state = {
        activeIndex: 0,
        focusIndex: 0
      }),
      (_this.handleTabClick = function(index) {
        _this.setState({
          activeIndex: index,
          focusIndex: index
        });
      }),
      (_this.handleTabFocus = function(index) {
        _this.setState({
          focusIndex: index
        });
      }),
      (_this.handlePrevTab = function() {
        var index = _this.state.focusIndex;
        if (index > 0) {
          _this.setState({ focusIndex: index - 1 });
        }
      }),
      (_this.handleNextTab = function() {
        var index = _this.state.focusIndex;
        if (index < _this.props.items.length - 1) {
          _this.setState({ focusIndex: index + 1 });
        }
      }),
      (_this.handleEnter = function() {
        if (_this.state.activeIndex !== _this.state.focusIndex) {
          _this.setState({
            activeIndex: _this.state.focusIndex
          });
        }
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  Tabs.prototype.componentDidMount = function componentDidMount() {
    this.props.screen.key(['h', 'left'], this.handlePrevTab);
    this.props.screen.key(['l', 'right'], this.handleNextTab);
    this.props.screen.key(['enter'], this.handleEnter);
  };

  Tabs.prototype.render = function render() {
    var _this2 = this;

    var activeTab = this.props.items[this.state.activeIndex];
    return _react2.default.createElement(
      'box',
      { class: stylesheet.tabsContainer },
      _react2.default.createElement(
        'box',
        { class: stylesheet.tabs },
        this.props.items.map(function(item, index) {
          var isActive = index === _this2.state.activeIndex;
          var isFocused = index === _this2.state.focusIndex;
          return _react2.default.createElement(Tab, {
            key: String(Math.random()),
            title: item.title,
            isActive: isActive,
            isFocused: isFocused,
            offset: index * 20,
            onClick: function onClick() {
              return _this2.handleTabClick(index);
            },
            onFocus: function onFocus() {
              return _this2.handleTabFocus(index);
            }
          });
        })
      ),
      _react2.default.createElement(
        'box',
        { class: stylesheet.tabsContent },
        activeTab.render()
      )
    );
  };

  return Tabs;
})(_react2.default.Component);

exports.default = Tabs;
