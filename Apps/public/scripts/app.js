"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.onPlusOne = _this.onPlusOne.bind(_this);
        _this.onMinusOne = _this.onMinusOne.bind(_this);
        _this.OnClear = _this.OnClear.bind(_this);
        _this.state = {
            count: _this.props.count
        };
        return _this;
    }

    _createClass(Counter, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState, snapshot) {
            console.log("Component Updated");
            if (prevState.count != this.state.count) {
                var json = JSON.stringify(this.state);
                console.log(json);
                localStorage.setItem("state", json);
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                var state = JSON.parse(localStorage.getItem("state"));
                console.log(state);
                if (state) {
                    this.setState(function () {
                        return {
                            count: state.count
                        };
                    });
                }
            } catch (error) {}
            console.log("<Counter /> mounted");
        }
    }, {
        key: "onPlusOne",
        value: function onPlusOne() {
            console.log("plusOne");
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: "onMinusOne",
        value: function onMinusOne() {
            console.log("minusOne");
            this.setState(function (prevState) {
                return { count: prevState.count - 1 };
            });
        }
    }, {
        key: "OnClear",
        value: function OnClear() {
            console.log("clear");
            this.setState(function () {
                return { count: 0 };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    "Count : ",
                    this.state.count
                ),
                React.createElement(
                    "button",
                    { onClick: this.onPlusOne },
                    " +1 "
                ),
                React.createElement(
                    "button",
                    { onClick: this.onMinusOne },
                    " -1 "
                ),
                React.createElement(
                    "button",
                    { onClick: this.OnClear },
                    " Clear "
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

//Default Props

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(React.createElement(Counter, { count: 3 }), document.getElementById('app'));
