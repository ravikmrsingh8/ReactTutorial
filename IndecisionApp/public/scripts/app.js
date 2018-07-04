"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.onResetOptions = _this.onResetOptions.bind(_this);
        _this.onAddOption = _this.onAddOption.bind(_this);
        _this.onMakeDecision = _this.onMakeDecision.bind(_this);

        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "onResetOptions",
        value: function onResetOptions() {
            console.log("Reset called");
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "onAddOption",
        value: function onAddOption(option) {
            if (!option) return "Empty string not allowed";
            if (this.state.options.indexOf(option) != -1) return "Option already exist!";

            this.setState(function (prevState) {
                var options = prevState.options.concat(option);
                console.log(options);
                return {
                    options: options
                };
            });
        }
    }, {
        key: "onMakeDecision",
        value: function onMakeDecision() {
            var toDoIndex = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[toDoIndex]);
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision App";
            var subtitle = "Put your life in the hands of a Computer";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(MakeDecisionAction, { onMakeDecision: this.onMakeDecision, hasOptions: this.state.options.length > 0 }),
                React.createElement(ResetOptionsAction, { onResetOptions: this.onResetOptions }),
                React.createElement(Options, { options: this.state.options }),
                React.createElement(OptionInput, { onAddOption: this.onAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h3",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var MakeDecisionAction = function (_React$Component3) {
    _inherits(MakeDecisionAction, _React$Component3);

    function MakeDecisionAction() {
        _classCallCheck(this, MakeDecisionAction);

        return _possibleConstructorReturn(this, (MakeDecisionAction.__proto__ || Object.getPrototypeOf(MakeDecisionAction)).apply(this, arguments));
    }

    _createClass(MakeDecisionAction, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { id: "makeDecisionButton", disabled: !this.props.hasOptions, onClick: this.props.onMakeDecision },
                    "What should i do?"
                )
            );
        }
    }]);

    return MakeDecisionAction;
}(React.Component);

var ResetOptionsAction = function (_React$Component4) {
    _inherits(ResetOptionsAction, _React$Component4);

    function ResetOptionsAction(props) {
        _classCallCheck(this, ResetOptionsAction);

        return _possibleConstructorReturn(this, (ResetOptionsAction.__proto__ || Object.getPrototypeOf(ResetOptionsAction)).call(this, props));
    }

    _createClass(ResetOptionsAction, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { id: "resetOptionButton", onClick: this.props.onResetOptions },
                    "Reset "
                )
            );
        }
    }]);

    return ResetOptionsAction;
}(React.Component);

var Options = function (_React$Component5) {
    _inherits(Options, _React$Component5);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "ol",
                    null,
                    this.getOptions()
                )
            );
        }
    }, {
        key: "getOptions",
        value: function getOptions() {
            return this.props.options.map(function (option) {
                return React.createElement(Option, { key: option, optionText: option });
            });
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "li",
                    null,
                    this.props.optionText
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var OptionInput = function (_React$Component7) {
    _inherits(OptionInput, _React$Component7);

    function OptionInput(props) {
        _classCallCheck(this, OptionInput);

        var _this7 = _possibleConstructorReturn(this, (OptionInput.__proto__ || Object.getPrototypeOf(OptionInput)).call(this, props));

        _this7.onAddOption = _this7.onAddOption.bind(_this7);
        _this7.state = {
            error: undefined
        };
        return _this7;
    }

    _createClass(OptionInput, [{
        key: "onAddOption",
        value: function onAddOption(e) {
            e.preventDefault();
            console.log("form submitted with " + e.target.elements.option.value);
            var option = e.target.elements.option.value.trim();
            var error = this.props.onAddOption(option);
            if (error) {
                alert(error);
                console.log(error);
            }

            e.target.elements.option.value = '';
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.onAddOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        { id: "addOptionButton" },
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return OptionInput;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
